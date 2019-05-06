const express = require('express'),
  mongojs = require('mongojs'),
  app = express(),
  PORT = process.env.PORT || 3000;
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// database config
// Save the URL of our database as well as the name of our collection
var databaseUrl = 'roomor';
var collections = ['users'];
// hook mongojs to db variable
const db = mongojs(databaseUrl, collections);
// log mongoDB errors
db.on('error', err => {
  console.log('MongoDB Error', err);
});
// ROUTES ==================
// get users
app.get('/api/users', (req, res) => {
  db.users.find({}, (err, users) => {
    if (err) throw err;
    res.json(users);
  });
});
// get user
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const ObjectId = mongojs.ObjectId;
  db.users.findOne({ _id: ObjectId(id) }, (err, user) => {
    if (err) throw err;
    res.json(user);
  });
});
// create new user
app.post('/api/users/new', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  db.users.insert({ firstName, lastName, email, password }, (err, user) => {
    if (err) throw err;
    res.redirect('/api/users');
  });
});
// update user
app.put('/api/users/:id/edit', (req, res) => {
  const ObjectId = mongojs.ObjectId;
  const { id } = req.params;
  const { email, password, firstName, lastName } = req.body;
  console.log(id, email, password, firstName, lastName);
  db.users.findAndModify(
    {
      query: { _id: ObjectId(id) },
      update: { $set: { email, password, firstName, lastName } },
      new: true
    },
    (err, user) => {
      if (err) throw err;
      res.redirect('/api/users');
    }
  );
});
// delete user
app.delete('/api/users/:id', (req, res) => {
  let ObjectId = mongojs.ObjectId;
  const { id } = req.params;
  db.users.remove({ _id: ObjectId(id) }, err => {
    if (err) throw err;
    res.redirect('/api/users');
  });
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
