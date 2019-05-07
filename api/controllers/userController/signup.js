const { User } = require('../../models');

module.exports = function(req, res) {
  User.create(req.body)
    .then(({ firstName, lastName }) =>
      res.send({ message: `${firstName} ${lastName} was created ` })
    )
    .catch(err => res.send({ message: err }));
};
