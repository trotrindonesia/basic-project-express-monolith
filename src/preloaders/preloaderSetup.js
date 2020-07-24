const templateLoader = require('./templateLoader');
const staticPathLoader = require('./staticPathLoader');
const routesLoader = require('./routesLoader');
const loggerLoader = require('./loggerLoader');
const errorHandlerLoader = require('./errorHandlerLoader');
const swaggerUiLoader = require('./swaggerUiLoader');
const setupMiddlewareLoader = require('./setupMiddlewareLoader');
const servicesMiddlewareLoader = require('./servicesMiddlewareLoader');

const preloaderSetup = (app, mongodb, config, logger) => {
  setupMiddlewareLoader(app, mongodb, config, logger);
  servicesMiddlewareLoader(app);
  staticPathLoader(app);
  templateLoader(app);
  loggerLoader(app);
  routesLoader(app);
  swaggerUiLoader(app);
  errorHandlerLoader(app);
};

module.exports = preloaderSetup;
