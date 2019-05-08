const { User } = require('../../models');
// const { validToken, createToken } = require('./tokenService');

module.exports = function(req, res) {
  console.log(req.body);
  // find user by username
  // use comparePassword to compare supplied password with hashed via bcrypt
  // if password is correct
  // create token with createToken from token service
  // respond to client with cookie containing token
  // cookie should be httpOnly and secure
  // res.redirect('/authorized);
  // /authorized route takes signedCookies from request object and token from signedCookies
  // tokenService.validToken(token).then(user)
  // grab username and hashed password from user from token
  // check that user in db with both values exists (hardcoded hashed password) (would never get to this point anyways but serves as extra security)
  // get user back from db
  // send user.username and user.email back to front end
  //

  res.send({
    user: {
      username: 'fook ya',
      email: 'food@food.com',
      password: 'password'
    }
  });
  // User.findById(req.params.id)
  //   .then(user => res.json(user))
  //   .catch(err => res.json(err));
};
