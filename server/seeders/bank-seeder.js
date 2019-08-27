/* eslint-disable */
var mongoose = require('mongoose');
var Bank = require('../models/Bank.model');

require('dotenv').config()
mongoose.connect(process.env.MONGO_CONNECTION_STR);

Bank.collection.drop();

/*
user[0] 
    Secret Seed: SCXSRKNDS7FG3L25OJHZ3MNAGKEOQ62JYYBXONMNL6CSUJVGBS7DTOBT
    Public Address: GBODIJAAI66DDKXLHGP6Z6ZC3M7K6LUIP6NK2CA34WOYYUHVSGS7E5AU
user[1]
    Secret Seed: SBEWY33LCGTVOARJQQPEXZITBV6HPNKI5D5N4GFWZIC62ULCV3S7EXDH
    Public Address: GB3CVLBKTBVDCZBKJ37LNFRUS726KN7U2QOOIYVVYGZG5XVES6VV4XVY
user[2]
    Secret Seed: SA6J3TJ7JXHNENGWJ4HFQPFM3BQDJZALFWGIHCBHWAX7RFGDHVLCYKIV
    Public Address: GB3YFG6SJVKWFM5TIZJJOMHJEDFM5GILSGLYV4LX43LXKWOAKQNCBKV3
*/

var Banks = [
  new Bank({
    uid: 'dr.frank@gmaile.com',
    balance: 1000,
    bos_account: 'GBAEHFNWP3MKUWRNAN2P3CFVPMLJGNLQPUU4SDWH4V5FMQ2NUV5BHNO3',
    bos_secrete_key: 'SCQ543HJB4IN6EANCT3ZVO6RMHCZNOUYFRPMKMSUCLRSXLIW4LE44547'
  }),
  new Bank({
    uid: 'zombie@gmaile.com',
    balance: 1000,
    bos_account: 'GCEU3G2NJSTVBIBI4SLG5NRJSQDAD3EWHYFZ7QYF6N7P3W2FCW3MP5KD',
    bos_secrete_key: 'SCUS7DHJG72IEVGIPUUE4AFWZL57ACBLGXYI27A3I7MJCSN7IS3ZRWE6'
   }),
  new Bank({
    uid: 'hello@gmaile.com',
    balance: 1000,
    bos_account: 'GCSZPY5CUQM5HBQM5YLZNQJLVX7QIZXP2SQLBDILMRDUKEJOV7AGUVHB',
    bos_secrete_key: 'SCDG4E446EKEPNCX4Z7R6EV5Q5P3NAD46XENSWHOJGLXI5I5LS62FCUF'
  }),
  new Bank({
    uid: 'bos@gmail.com',
    balance: 1000,
    bos_account: 'GBHT5S52JPEE2KF6OXVLMW6YAIOHKHJUWNIZIYVT4LLH7H6MVOXZZC7U',
    bos_secrete_key: 'SAUVWZCSXNWQMO7VFFAMM7Q3DI7EABEUEPZW6C5AEAZEO7PEJUCVHIJH'
  })
];

var count = 0;
Banks.forEach((elem) => {
  elem.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      count++;
      if (count == Banks.length) quit();
    }
  });
});

function quit() {
  console.log('Added ',Banks.length,' banks seeds');
  mongoose.disconnect();
}
