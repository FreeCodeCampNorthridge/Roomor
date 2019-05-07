const { User } = require('../../models');

module.exports = function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(({ firstName, lastName }) =>
      res.send({ message: `${firstName} ${lastName} was updated` })
    )
    .catch(err => res.send({ message: err }));
};
