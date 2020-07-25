const express = require('express');
const mongodb = require('mongodb');
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
  express
};
preloaderSetup(preloaderParameters);

app.listen(config.httpPort, () => logger.info(`app running at http://localhost:${config.httpPort}`));
