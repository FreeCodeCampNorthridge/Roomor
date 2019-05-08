const mongoose = require('mongoose');
const url = process.env.DATABASEURL || 'mongodb://localhost/roomor';
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });
