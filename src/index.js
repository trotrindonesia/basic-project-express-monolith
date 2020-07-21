const express = require('express');
const {
  logger: { logger }
} = require('custom-error-exceptions');

const { httpPort: port } = require('../config');
const { preloaderSetup } = require('./preloaders');

const app = express();
preloaderSetup(app);

app.listen(port, () => logger.info(`app running at http://localhost:${port}`));
