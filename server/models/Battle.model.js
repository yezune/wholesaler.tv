var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BattleSchema = new Schema({
    gameId: ObjectId,
    trunNumber: Number,
    startBlockHeight: Number,
    endBlockHeight: Number,
    participants: Array
});

module.exports = mongoose.model('Battle', BattleSchema);