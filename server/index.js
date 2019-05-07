const express = require('express');

const path = require('path');

const cors = require('cors');

const bodyParser = require('body-parser');

const db = require('../db/index.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use('/', express.static(path.join(__dirname, '/../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/songs', (req, res) => {
  db.getSongs((err, songs) => {
    if (err) {
      console.error(err);
    } else {
      console.log(songs);
      res.jsonp(songs);
    }
  });
});

app.get('/shows', (req, res) => {
  db.getShows((err, shows) => {
    if (err) {
      console.error(err);
    } else {
      res.send(shows);
    }
  });
});

app.put('/shows', (req, res) => {
  const date = req.body.date;
  const venue = req.body.venue;

  db.updateShowVenue(date, venue, (err, success) => {
    if (err) {
      console.error(err)
    } else {
      res.status(200).send(success);
    }
  })
});

app.post('/shows', (req, res) => {
  const date = req.body.date;
  const venue = req.body.venue;

  db.addShow(date, venue, (err, book) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send(book);
    }
  });
});

app.delete('/shows', (req, res) => {
  const date = req.body.date;

  db.deleteShow(date, (err, success) => {
    if (err) {
      console.error(err);
    } else {
      res.send(success);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
