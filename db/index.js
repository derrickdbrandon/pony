const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dotpony', { useNewUrlParser: true });

const songSchema = mongoose.Schema({
  title: String,
  url: String,
});

const Song = mongoose.model('song', songSchema);

const getSongs = (callback) => {
  Song.find().exec((err, songs) => {
    if (err) {
      callback(err);
    } else {
      callback(null, songs);
    }
  });
};

module.exports = {
  getSongs,
};
