'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var sebak = require('sebak-sdk');
var logger = require('../src/lib/logger');
var User = require('../models/User.model');
var Bank = require('../models/Bank.model');

require('dotenv').config();
mongoose.connect(process.env.MONGO_CONNECTION_STR);

router.post('/signUp', function(req, res, next) {
  logger.info('## Sign Up process');

  const keyPair = sebak.sebakUtil.keyPairGenerate();

  const user = new User({
    uid: req.body.uid,
    password: req.body.password,
    bos_account: keyPair['address'],
    bos_secrete_key: keyPair['seed'],
  });

  user.save()
    .then((result) => {
      logger.info(result);
    })
    .catch((err) => {
      logger.info('error occurred');
      logger.info(err);
    });

  const bank = new Bank({
    uid: req.body.uid,
    balance: 0,
    bos_account: keyPair['address'],
    bos_secrete_key: keyPair['seed'],
  });

  bank.save()
    .then((result) => {
      logger.info(result);
    })
    .catch((err) => {
      logger.info('error occurred');
      logger.info(err);
    });

  res.end();
});

module.exports = router;
