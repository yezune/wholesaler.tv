'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var logger = require('../src/lib/logger');
var User = require('../models/User.model');
var Bank = require('../models/Bank.model');

require('dotenv').config();
mongoose.connect(process.env.MONGO_CONNECTION_STR);

// log in process
router.post('/logIn', function(req, res, next) {
  req.accepts('application/json');
  const _uid = req.body.email;
  const _password = req.body.password;
  if (req.session.user) {
    // already log in state
    if (req.session.user.email == _uid) {
      logger.info(req.session.user);
      logger.info('already log in state');
      const json = {
        user: {
          email: req.session.user.email,
          balance: req.session.user.balance,
        },
        authenticated: true,
        emailChecked: true
      };
      res.send(json);
      res.send();
    } else {
      const json = {
        user: {
          email: req.session.user.email,
          balance: req.session.user.balance,
        },
        authenticated: true,
        emailChecked: false
      };
      res.send(json);
    }
  } else {
    User.findOne({uid: _uid}, function(err, results) {
      if (err) {
        res.status(302).send();
      } else {
        if (results != null) {
          logger.info('user record found');
          var user = new User({uid: _uid});
          var authnticated = user.authenticate(_password, results._doc.salt, results._doc.hashed_password);
          if (authnticated) {
            Bank.findOne({uid: _uid}, function(err, results) {
              if (err) {
                logger.info('user bank record incorrect');
                res.status(500).send();
              } else {
                logger.info('log in success!');
                const json = {
                  user: {
                    email: results._doc.uid,
                    balance: results._doc.balance,
                  },
                  authenticated: true,
                  emailChecked: true,
                };
                req.session.user = {
                  email: _uid,
                  password: _password,
                  balance: results._doc.balance
                };
                res.send(json);
              }
            });
          } else {
            logger.info('password incorrect!');
            res.status(302).send();
          }
        } else {
          logger.info('user email incorrect!');
          res.status(302).send();
        }
      }
    });
  }
});

module.exports = router;
