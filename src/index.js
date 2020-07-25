const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');
const {
  logger: { logger }
} = require('custom-error-exceptions');

const config = require('../config');
const { preloaderSetup } = require('./preloaders');

const app = express();

const preloaderParameters = {
  app,
  mongodb,
  config,
  logger,
  express,
  cors
};
preloaderSetup(preloaderParameters);

app.listen(config.httpPort, () => logger.info(`app running at http://localhost:${config.httpPort}`));
