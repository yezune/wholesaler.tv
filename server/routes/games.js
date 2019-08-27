'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Game = require('../models/Game.model');

require('dotenv').config();
mongoose.connect(process.env.MONGO_CONNECTION_STR);
/*
var GameSchema = new Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    desc: {type:String, required: true},
    image_uri: {type: String, required: true},
    thumb_uri: {type: String, required: true},
    game_url: {type: String, required: false},
    popularity: {type: Number, default: 0}
    },
    {versionKey: false}
);
*/
// Get all games
router.get('/games', function(req, res, next) {
  Game.find()
    .then(function(data) {
      res.json(data);
    });
});

// Get single game
router.get('/games/:id', function(req, res, next) {
  var _id = req.params.id;
  Game.findById(_id, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.json(data);
    }
  });
});

// Add new game
router.post('/games', function(req, res, next) {
  req.accepts('application/json');
  var game = {
    title: req.body.title,
    genre: req.body.genre,
    desc: req.body.desc,
  };

  var data = new Game(game);
  data.save(function(err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send(data._id);
    }
  });
});

// Delete game
router.delete('/games/:id', function(req, res, next) {
  var _id = req.params.id;
  Game.findByIdAndRemove(_id, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
});

// Update game
router.put('/games/:id', function(req, res, next) {
  req.accepts('application/json');
  var _id = req.params.id;
  Game.findById(_id, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      data.title = req.body.title;
      data.genre = req.body.genre;
      data.desc = req.body.desc;
      data.save();
      res.status(200).json(data);
    }
  });
});

module.exports = router;
