const { User } = require('../../models');
const { createToken, cookieOptions } = require('../../utilities/tokenService');

const signup = async function(req, res) {
  try {
    let user = await User.create(req.body);
    let token = createToken(user);
    res.cookie('token', token, cookieOptions);
    // res.redirect('/users/authorized');
    res.send({ username: user.username });
  } catch (err) {
    if (err) throw err;
  }
};

module.exports = signup;
