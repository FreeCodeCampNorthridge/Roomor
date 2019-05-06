const express = require('express'),
  app = express(),
  PORT = process.env.PORT || 3000;
// DATA ==============
const users = [
  { id: 1, name: 'wesley', age: 45, occupation: 'senior' },
  { id: 2, name: 'mike', age: 22, occupation: 'student' },
  { id: 3, name: 'kyle', age: 12, occupation: 'teenager' },
  { id: 4, name: 'manny', age: 27, occupation: 'military' }
];
// ROUTES ==================
// root
app.get('/', (req, res) => {
  res.send('root route');
});
// get user
app.get('/api/users/:id', (req, res) => {
  res.send('get single user');
});
// get users
app.get('/api/users', (req, res) => res.json(users));
// create new user
app.post('/api/users/new', (req, res) => {
  res.send('add new user');
});
// update user
app.put('/api/users/:id', (req, res) => {
  res.send('update user');
});
// delete user
app.delete('/api/users/:id', (req, res) => {
  res.send('delete user');
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
