const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dotpony', { useNewUrlParser: true });

let songSchema = mongoose.Schema({
  name: String,
  url: String,
});
