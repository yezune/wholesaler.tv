var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    desc: {type:String, required: true},
    imageUri: String,
    thumbUri: String,
    gameUri: String,
    popularity: Number
});

module.exports = mongoose.model('Game', GameSchema);