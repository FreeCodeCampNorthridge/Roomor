const express = require('express'),
  mongoose = require('mongoose'),
  app = express(),
  PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ============ MongoDB config ==============
const url = process.env.DATABASEURL || 'mongodb://localhost/roomor';
mongoose.connect(url, { useNewUrlParser: true });
// ============= ROUTES ==========================
app.use('/api/users', require('./routes/userRoutes.js'));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
