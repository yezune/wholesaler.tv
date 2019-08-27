'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var logger = require('../src/lib/logger');

require('dotenv').config();
mongoose.connect(process.env.MONGO_CONNECTION_STR);

router.post('/logOut', function(req, res, next) {
  logger.info('## log Out process');
  logger.info(req.session.user)
  req.accepts('application/json');
  if (req.session.user) {
  // log out state
    if (req.session.user.email == req.body.email) {
      logger.info('log out');
      const json = {
        user: {
          email: req.session.user.email,
          balance: req.session.user.balance
        },
        authenticated: false,
        emailChecked: true
      };
      req.session.destroy(function(err) {
        if (err) {throw err;}
        logger.info('session destroyed and log out');
        res.send(json);
      });
    }
  } else {
    // not log in state
    logger.info('not log in state');
    res.status(401).send();
  }
});

module.exports = router;
