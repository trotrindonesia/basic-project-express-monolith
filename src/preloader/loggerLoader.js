const {
  logger: { requestLogger }
} = require('custom-error-exceptions');

const loggerLoader = (app) => {
  app.use(requestLogger);
};

module.exports = loggerLoader;
