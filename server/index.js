const express = require('express');

const path = require('path');

const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use('/', express.static(path.join(__dirname, '/../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
