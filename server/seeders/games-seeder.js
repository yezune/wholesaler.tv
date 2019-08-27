var mongoose = require('mongoose');
var Game = require('../models/Game.model');

require('dotenv').config()
mongoose.connect(process.env.MONGO_CONNECTION_STR);

Game.collection.drop();
var games = [
  new Game({
    title: 'Darts',
    genre: 'Sports',
    desc: 'Darts Pro is a HTML5 Skill Game.\
    Test your aim with this professional version of the Darts Game.\
    The game follows the official rules of the Darts Regulation Authority.\
    Three Games Mode:\
    Play Solo\
    Challenge the CPU\
    Challenge a Friend from the same device\
    The game is usable both in Portrait and Landscape Mode, try it now!!',
    imageUri: '/games/darts/image.jpg',
    thumbUri: '/games/darts/thumb.jpg',
    gameUri: '/games/darts/index.html',
    popularity: 0
  }),
  new Game({
    title: 'Penalty Kicks',
    genre: 'Sports',
    desc: 'A fun and easy-to-play Soccer Goal kicking game.\
    The player has 15 attempts to gain the highest score possible while getting it past the goalkeeper, much harder than it sounds!',
    imageUri: '/games/panaltykicks/image.jpg',
    thumbUri: '/games/panaltykicks/thumb.jpg',
    gameUri: '/games/panaltykicks/index.html',
    popularity: 0
  }),
  new Game({
    title: 'Jigsaw',
    genre: 'Puzzle',
    desc:'The puzzle game par excellence.\
    Select your favorite picture and complete the jigsaw in the shortest time possible!\
    \
    Game Features:\
    4 Game difficulties (16, 36, 64 and 100 pieces)\
    6 Pictures that can be easily replaced with your own.',
    imageUri: '/games/jigsaw/image.jpg',
    thumbUri: '/games/jigsaw/thumb.jpg',
    gameUri: '/games/jigsaw/index.html',
    popularity: 0
  }),
  new Game({
    title: 'Master Chess',
    genre: 'Board',
    desc: 'Enjoy this stylish version of the classic Chess Game.\
    Two Game’s Mode:\
    \
    Play against the pc\
    Challenge a friend playing locally',
    imageUri: '/games/masterchess/image.jpg',
    thumbUri: '/games/masterchess/thumb.jpg',
    gameUri: '/games/masterchess/index.html',
    popularity: 0
  }),
  new Game({
    title: 'The Fruits',
    genre: 'Slotmachine',
    desc: 'Slot Machine - The Fruits is a HTML5 casino game. Enjoy this coloroued slot machine with classic fruit symbols! \
    The ZIP package contains the game with 1500x640 resolution that scales to fit the whole screen device \
    Just warning that for very wide screens, the game may not be perfectly full screen. The game is fully compatible with all most common mobile devices.',
    imageUri: '/games/thefruits/image.jpg',
    thumbUri: '/games/thefruits/thumb.jpg',
    gameUri: '/games/thefruits/index.html',
    popularity: 0
  }),
  new Game({
    title: 'Sweety Memory',
    genre: 'Puzzle',
    desc: 'Sounds are enabled for mobile but we can’t grant full audio compatibility on all mobile devices due to some well-know issue between some mobile-browser and HTML5.\
    So if you want to avoid sound loading, please read the documentation\
    Sounds can’t be enabled for Windows Phone as this kind of device have unsolvable issues with <audio> and <video> tag.',
    imageUri: '/games/sweetymemory/image.jpg',
    thumbUri: '/games/sweetymemory/thumb.jpg',
    gameUri: '/games/sweetymemory/index.html',
    popularity: 0
  })
];

var count = 0;
games.forEach((elem) => {
  elem.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      count++;
      if (count == games.length) quit();
    }
  });
});

function quit() {
  console.log('Added ',games.length,' Game seeds');
  mongoose.disconnect();
}
