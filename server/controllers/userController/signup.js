const { User } = require('../../models');
const { createToken } = require('./tokenService');

module.exports = function(req, res) {
  User.create(req.body)
    .then(user => {
      let token = createToken(user);
      res.cookie('token', token, {
        // secure: true, on deployment uncomment
        signed: true,
        maxAge: 1000 * 60 * 60,
        httpOnly: true // on dev
      });
      res.send({ message: `${user} was created` });
      // res.redirect('/users/someAuthorizedRoute')
    })
    .catch(err => {
      if (err) throw err;
    });
};
