const { User } = require('../../models');
// const { validToken, createToken } = require('./tokenService');

module.exports = function(req, res) {
  console.log('hit login');
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
