/* eslint-disable */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

require('dotenv').config();

var BankSchema = new Schema({
  uid: {type: String, required: true, unique: true},
  balance: {type: Number, required: true, 'default':0},
  bos_account: {type: String, required: true, 'default':''},
  bos_secrete_key: {type: String, required: true, 'default':''}
});

module.exports = mongoose.model('Bank', BankSchema);