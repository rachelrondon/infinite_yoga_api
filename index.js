const express = require('express');
const logger = require('morgan');
const app = express();
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('server listening on port', PORT));

app.use(logger('dev'));

app.use(require('./resources'));

module.exports = app;
