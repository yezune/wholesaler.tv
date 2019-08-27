'use strict';

var crypto = require('crypto');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// from https://m.blog.naver.com/PostView.nhn?blogId=rock1192&logNo=220982699919&proxyReferer=https%3A%2F%2Fwww.google.com%2F


var UserSchema = new Schema({
  uid: {type: String, required: true, unique: true},
  hashed_password: {type: String, required: true, 'default': ''},
  salt: {type: String, required: true},
  bos_account: {type: String, required: true, 'default': ''},
  bos_secrete_key: {type: String, required: true},
});

UserSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this. encryptPassword(password);
    // logger.info('virtual password setter:' + this.hashed_password);
  })
  .get(function() {
    return this._password;
  });

UserSchema.method('encryptPassword', function(plainText, inSalt) {
  if (inSalt) {
    return crypto.createHmac('sha256', inSalt).update(plainText).digest('hex');
  } else {
    return crypto.createHmac('sha256', this.salt).update(plainText).digest('hex');
  }
});

UserSchema.method('makeSalt', function() {
  return Math.round((new Date().valueOf() * Math.random())) + '';
});

UserSchema.method('authenticate', function(plainText, inSalt, hashed_password) {
  if (inSalt) {
    // logger.info('## authenticate call : %s -> %s : %s', plainText, this.encryptPassword(plainText, inSalt), hashed_password);
    return this.encryptPassword(plainText, inSalt) === hashed_password;
  } else {
    // logger.info('## authenticate call : %s -> %s : %s', plainText, this.encryptPassword(plainText), this.hashed_password);
    return this.encryptPassword(plainText) === this.hashed_password;
  }
});
module.exports = mongoose.model('User', UserSchema);
