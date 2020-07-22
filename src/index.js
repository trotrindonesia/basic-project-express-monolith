const express = require('express');
const mongodb = require('mongodb');
const {
  logger: { logger }
} = require('custom-error-exceptions');

const config = require('../config');
const { setupMiddleware } = require('./middlewares');
const { preloaderSetup } = require('./preloaders');

const app = express();
setupMiddleware(app, mongodb, config, logger);
preloaderSetup(app);

app.listen(config.httpPort, () => logger.info(`app running at http://localhost:${config.httpPort}`));
