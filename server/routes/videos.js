'use strict';

var express = require('express');
var router = express.Router();

require('dotenv').config();

// Vimeo Video Info
var Vimeo = require('vimeo').Vimeo;

var clientId=process.env.VIMEO_CLIENT_ID || "797301be7f1ff9e493f3fbe5ce57dc11c9420420";
var clientSecret=process.env.VIMEO_CLIENT_SECRET || "hVnsxnPd7eL9RKN+ka3L8+Z/ED48aqrVxC2LCPgcAoYpqJWZIDFzChB2IRuFqNslsibQ/qNLF7C5UxMnqeyf4w02hZHhKKLdzAI+Z7CSZ62G4u0fQvTrRQJo6CkJ4dFK";
var clientToken=process.env.VIMEO_TOKEN || "d016ce474e30b612b88f0bbdbec4e696";

var client = new Vimeo(clientId, clientSecret, clientToken);

// function searchVideo(id, videos) {
//   var _id = id;
//   videos.data.forEach((video) => {
//     if (video.uri == ('/video/' + _id)) {
//       return video;
//     }
//   });
//   return null;
// }

client.request({
  method: 'GET',
  path: '/me/videos'
}, function (error, body, status_code, headers) {
  if (error) {
    console.log(error);
    process.exit(error);
  }else{
    // console.log(body);
    router.videos = body;
    console.log("total:", body.total);
    body.data.forEach((video) => {
      console.log(video.name,  video.link, video.type);
    });
  }
})

// Get all games
router.get('/videos', function(req, res, next) {
  res.json(router.videos);
});

// Get single video
router.get('/videos/:id', function(req, res, next) {
  console.log('uri: /videos/' + req.params.id)
  var id = '/videos/' + req.params.id;
  var NotFound = true;
  router.videos.data.forEach((video) => {
    console.log(video.uri, ' == ', id);
    if (video.uri == id) {
      res.json(video);
      NotFound = false;
    }
  });
  if (NotFound) {
    res.status(404).send();
  }
});

// // Add new game
// router.post('/videos', function(req, res, next) {
//   req.accepts('application/json');
//   var game = {
//     title: req.body.title,
//     genre: req.body.genre,
//     desc: req.body.desc,
//   };

//   var data = new Game(game);
//   data.save(function(err) {
//     if (err) {
//       res.status(500).send();
//     } else {
//       res.status(201).send(data._id);
//     }
//   });
// });

// // Delete game
// router.delete('/videos/:id', function(req, res, next) {
//   var _id = req.params.id;
//   Game.findByIdAndRemove(_id, function(err, data) {
//     if (err) {
//       res.status(404).send();
//     } else {
//       res.status(204).send();
//     }
//   });
// });

// // Update game
// router.put('/videos/:id', function(req, res, next) {
//   req.accepts('application/json');
//   var _id = req.params.id;
//   Game.findById(_id, function(err, data) {
//     if (err) {
//       res.status(404).send();
//     } else {
//       data.title = req.body.title;
//       data.genre = req.body.genre;
//       data.desc = req.body.desc;
//       data.save();
//       res.status(200).json(data);
//     }
//   });
// });

module.exports = router;
