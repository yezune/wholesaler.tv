'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const fetch = require('isomorphic-fetch');
const SebakSDK = require('sebak-sdk');
var Bank = require('../models/Bank.model');
var logger = require('../src/lib/logger');

require('dotenv').config();
mongoose.connect(process.env.MONGO_CONNECTION_STR);
const sebakApi = process.env.BOSCOIN_NET_URI;
const networkId = 'sebak-test-network';
const transactionPath = '/api/v1/transactions';
const accountPath = '/api/v1/accounts/';
const apiTransactionUrl = sebakApi + transactionPath;
const apiAccountUrl = sebakApi + accountPath;
const target = process.env.SERVER_PUBLIC_ADDRESS;

// Get all accounts
router.get('/bank', function(req, res, next) {
  Bank.find()
    .then(function(data) {
      res.json(data);
    });
});

// Get account
router.get('/bank/:id', function(req, res, next) {
  var _uid = req.params.id;
  Bank.findOne({uid: _uid}, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.json(data);
    }
  });
});

router.get('/bank/:id/check', function(req, res, next) {
  const _uid = req.params.id;
  Bank.findOne({uid: _uid}, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      const bank = new Bank({
        uid: data._doc.uid,
        balance: data._doc.balance,
        bos_account: data._doc.bos_account,
        bos_secrete_key: data._doc.bos_secrete_key
      });
      let amount = 0;
      let tx = {};
      fetch(apiAccountUrl + bank.bos_account)
        .then(function(res) {
          return res.json();
        })
        .then(function(data) {
          amount = data.balance;
          if (amount <= 10000) {
            res.send('Insufficient balance');
            return;
          }
          amount = (amount - 10000) / 10000000;
          tx = new SebakSDK.transaction();
          tx.addOperation(target, amount, 'payment');
          tx.setSequenceId(Number(data.sequence_id));
          tx.sign(bank.bos_secrete_key, networkId);
          data = JSON.stringify(tx.tx);

          fetch(apiTransactionUrl, {
            method: 'POST',
            timeout: 3000,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: data
          })
            .then((res) => res.json())
            .then(function(json) {
              logger.info(json);
              Bank.findOneAndUpdate({uid: bank.uid}, {balance: bank.balance + amount}, function(err, data) {
                if (err) {
                  res.status(404).send();
                  return;
                }
                const result = {
                  user: {
                    email: data._doc.uid,
                    balance: data._doc.balance,
                  },
                  authenticated: true,
                  emailChecked: true
                };
                res.send(result);
                return;
              });
            })
            .catch((err) => logger.info(err));
        });
    }
  });
});

// Add new account
router.post('/bank', function(req, res, next) {
  req.accepts('application/json');
  var bank = {
    uid: req.body.uid,
    balance: req.body.balance,
    bos_account: req.body.bos_account,
  };

  var data = new Bank(bank);
  data.save(function(err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send(data.uid);
    }
  });
});

// Delete account
router.delete('/bank/:id', function(req, res, next) {
  var _uid = req.params.id;
  Bank.findOneAndRemove({uid: _uid}, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
});

// Update account balance
router.put('/bank/:id', function(req, res, next) {
  req.accepts('application/json');
  var _uid = req.params.id;
  Bank.findOneAndUpdate({uid: _uid}, {balance: req.body.balance}, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send();
    }
  });
});

module.exports = router;
