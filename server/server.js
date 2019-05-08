const express = require('express'),
  app = express(),
  cookieParser = require('cookie-parser'),
  { config } = require('dotenv'),
  logger = require('morgan'),
  { urlencoded, json } = express;
// parses incoming requests with JSON payloads
app.use(urlencoded({ extended: true }));
app.use(json());
// load env variable
config();
// parse cookies and puts information onto req object
// encodes and decrypts with provided SECRET
app.use(cookieParser(process.env.SECRET));
// ============ MongoDB config ==============
require('./config/connection');
// log response status
app.use(logger('dev'));
// ============= ROUTES ==========================
app.use('/api/users', require('./routes/userRoutes.js'));

app.listen(process.env.PORT || 3001);
