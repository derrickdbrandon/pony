const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dotpony', { useNewUrlParser: true });

const songSchema = mongoose.Schema({
  title: String,
  url: String,
});

const showSchema = mongoose.Schema({
  date: String,
  venue: String,
});

const Show = mongoose.model('show', showSchema);

const Song = mongoose.model('song', songSchema);

const getSongs = (callback) => {
  Song.find({}).exec((err, songs) => {
    if (err) {
      callback(err);
    } else {
      callback(null, songs);
    }
  });
};

const getShows = (callback) => {
  Show.find({}).exec((err, shows) => {
    if (err) {
      callback(err);
    } else {
      callback(null, shows);
    }
  });
};

const deleteShow = (date, callback) => {
  Show.deleteOne(date, callback);
};

const addShow = (date, venue, callback) => {
  const show = new Show({
    date,
    venue,
  });

  show.save((err, book) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, book);
    }
  });
};

const updateShowVenue = (date, venue, callback) => {
  Show.findOneAndUpdate({ date }, { venue }, callback);
};

module.exports = {
  getSongs,
  getShows,
  addShow,
  updateShowVenue,
  deleteShow,
};
