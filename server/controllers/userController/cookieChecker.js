const { User } = require('../../models'),
  { validToken } = require('../../utilities/tokenService');

const cookieChecker = async function(req, res) {
  try {
    // get token from signedCookies from request object
    let { token } = req.signedCookies;
    if (token) {
      // validate token and grab username and hashed password from user from token
      let {
        user: { username, password }
      } = await validToken(token);
      // get user back from db
      let user = await User.findOne({ username, password });
      // send user.username and user.email back to front end
      res.send({ email: user.email, username: user.username });
    } else {
      res.send('Your cookie expired, please log back in');
    }
  } catch (err) {
    if (err) throw err;
  }
};

module.exports = cookieChecker;
