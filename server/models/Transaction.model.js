var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

var TransactionSchema = new Schema({
    trTime: Date,
    trType: String,
    trAmount: Number,
    trAccountFrom: String,
    trAccountTo: String,    
});

module.exports = mongoose.model('Transaction', TransactionSchema);