const { User } = require('../../models');
const { createToken } = require('../../utilities/tokenService');

const cookieOptions = {
  httpOnly: true,
  // secure: true, on deployment
  signed: true,
  maxAge: (1000 * 60) ^ 60,
  expiresIn: new Date(Date.now() + 90000)
};

const signup = async function(req, res) {
  try {
    let user = await User.create(req.body);
    let token = await createToken(user);
    res.cookie('token', token, cookieOptions);
    res.redirect('/api/users/authorized');
  } catch (err) {
    if (err) throw err;
  }
};

module.exports = signup;
