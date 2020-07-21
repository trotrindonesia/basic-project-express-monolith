const express = require('express');
const {
  logger: { logger }
} = require('custom-error-exceptions');

const { preloaderSetup } = require('./preloader');

const app = express();
preloaderSetup(app);

const port = 3002;
app.listen(port, () => logger.info(`app running at http://localhost:${port}`));
