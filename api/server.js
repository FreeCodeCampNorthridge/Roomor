const express = require('express'),
  mongoose = require('mongoose'),
  app = express(),
  PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const url = process.env.DATABASEURL || 'mongodb://localhost/roomor';
mongoose.connect(url, { useNewUrlParser: true });
const db = require('./models/');

// ============ ROUTES ==================
// get users
app.get('/api/users', (req, res) => {
  db.User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});
// get user
app.get('/api/users/:id', (req, res) => {
  db.User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});
// create new user
app.post('/api/users/new', (req, res) => {
  db.User.create(req.body)
    .then(user =>
      res.send({ message: `${user.firstName} ${user.lastName} was created ` })
    )
    .catch(err => res.send({ message: err }));
});
// update user
app.put('/api/users/:id/edit', (req, res) => {
  db.User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user =>
      res.send({ message: `${user.firstName} ${user.lastName} was updated` })
    )
    .catch(err => res.send({ message: err }));
});
// delete user
app.delete('/api/users/:id', (req, res) => {
  db.User.findByIdAndRemove(req.params.id)
    .then(user =>
      res.send({ message: `${user.firstName} ${user.lastName} was deleted` })
    )
    .catch(err => res.send({ message: err }));
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
