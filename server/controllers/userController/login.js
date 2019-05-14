const { User } = require('../../models');
const { createToken } = require('../../utilities/tokenService');

const cookieOptions = {
  httpOnly: true,
  // secure: true, on deployment
  signed: true,
  maxAge: (1000 * 60) ^ 60,
  expiresIn: new Date(Date.now() + 90000)
};

const login = async function(req, res) {
  try {
    // find username from post body
    let user = await User.findOne({ username: req.body.username });
    // use checkPassword from UserSchema to compare supplied password with hashed via bcrypt
    let matchedPassword = await user.checkPassword(req.body.password);
    // if password is correct
    if (matchedPassword) {
      // create token with createToken from token service
      let token = await createToken(user);
      // respond to client with cookie containing token
      // cookie should be httpOnly and secure
      res.cookie('token', token, cookieOptions);
      // res.redirect('/authorized);
      res.redirect('/api/users/authorized');
    } else {
      // passwords don't match send error
      res.send('Sorry, the username or password is invalid');
    }
  } catch (err) {
    if (err) throw err;
  }
};
module.exports = login;
