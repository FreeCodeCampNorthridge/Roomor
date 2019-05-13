const { User } = require('../../models'),
  { validToken } = require('../../utilities/tokenService');

const cookieChecker = async function(req, res) {
  try {
    // /authorized route takes signedCookies from request object and token from signedCookies
    let token = req.signedCookies.token;
    console.log(token); // returns empty object
    // if (token) {
    //   try {
    //     // tokenService.validToken(token).then(user)
    //     // check that user in db with both values exists (hardcoded hashed password) (would never get to this point anyways but serves as extra security)
    //     let {
    //       data: { _id, username, password, email }
    //     } = await validToken(token);
    //     // grab username and hashed password from user from token
    //     let user = await User.findOne({ username, password, email, _id });
    //     // get user back from db
    //     // send user.username and user.email back to front end
    //     res.send({ email: user.email, username: user.username });
    //   } catch (err) {
    //     if (err) throw err;
    //   }
    // } else {
    //   res.send('Your cookie expired, please log back in');
    // }
  } catch (err) {
    if (err) throw err;
  }
};

module.exports = cookieChecker;
