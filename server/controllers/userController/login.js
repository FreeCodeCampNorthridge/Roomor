const { User } = require('../../models');
const { createToken, cookieOptions } = require('../../utilities/tokenService');

const login = async function(req, res) {
  try {
    // find username from post body
    let user = await User.findOne({ username: req.body.username });
    // use checkPassword from UserSchema to compare supplied password with hashed via bcrypt
    let matchedPassword = await user.checkPassword(req.body.password);
    console.log(user.password);
    console.log(matchedPassword);
    // if password is correct
    if (matchedPassword) {
      // create token with createToken from token service
      let token = createToken(user.password);
      // respond to client with cookie containing token
      // cookie should be httpOnly and secure
      res.cookie('token', token, cookieOptions);
      // res.redirect('/authorized);
      res.redirect('/users/authorized');
    } else {
      // passwords don't match send error
      res.send('Sorry, the username or password is invalid');
    }
  } catch (err) {
    if (err) throw err;
  }
};
module.exports = login;
