const { User } = require('../../models');

module.exports = function(req, res) {
  User.findByIdAndRemove(req.params.id)
    .then(({ firstName, lastName }) =>
      res.send({ message: `${firstName} ${lastName} was deleted` })
    )
    .catch(err => res.send({ message: err }));
};
