const winston = require('winston');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const app = express();

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));