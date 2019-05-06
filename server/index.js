const express = require('express');

const path = require('path');

const cors = require('cors');

const bodyParser = require('body-parser');

const Song = require('../db/index.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use('/', express.static(path.join(__dirname, '/../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/songs', (req, res) => {
  Song.getSongs((err, songs) => {
    if (err) {
      console.error(err);
    } else {
      res.send(songs);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
