const { User } = require('../../models');

module.exports = function(req, res) {
  console.log('hit login');
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
};
