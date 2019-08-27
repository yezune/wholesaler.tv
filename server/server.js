'use strict';

var express = require('express');
const uuid = require('uuid/v4')
var cors = require('cors');
// var logger = require('morgan');
var mongoose = require('mongoose');

// Express middleware
var bodyParser = require('body-parser');
var session = require('express-session');

var users = require('./routes/users');
var banks = require('./routes/bank');
var games = require('./routes/games');
var logIn = require('./routes/logIn');
var logOut = require('./routes/logOut');
var signUp = require('./routes/signUp');

var logger = require('./src/lib/logger');

require('dotenv').config();

const MONGO_CONNECTION = process.env.MONGO_CONNECTION_STR || "mongodb://mongodb:27017/arbang";
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGO_CONNECTION);

var app = express();


// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: 'http://localhost'}));

// TODO: Once in production, don't forget to modify req.headers.origin to the exact website you wish to allow to connect.
/* app.use((req, res, next) => {
  logger.info(req.headers.origin);
  var allowedOrigins = ['http://127.0.0.1:80', 'http://localhost:80', 'http://127.0.0.1', 'http://localhost'];
  var origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  return next();
});
*/
app.use((req, res, next) => {
  next();
});

app.use(session({
  genid: (req) => {
    return uuid(); // use UUIDs for session IDs
  },
  secret: 'bos',
  resave: false,
  saveUninitialized: true,
  cookie: {httpOnly: false}
}));

app.use((req, res, next) => {
  next();
});

app.use('/api', games);
app.use('/api', users);
app.use('/api', banks);
app.use('/api', logIn);
app.use('/api', logOut);
app.use('/api', signUp);

app.listen(PORT, function() {
  logger.info(`Server is listening on port ${PORT}`);
});
