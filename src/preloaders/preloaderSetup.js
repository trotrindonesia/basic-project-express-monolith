const templateLoader = require('./templateLoader');
const staticPathLoader = require('./staticPathLoader');
const routesLoader = require('./routesLoader');
const loggerLoader = require('./loggerLoader');
const errorHandlerLoader = require('./errorHandlerLoader');
const swaggerUiLoader = require('./swaggerUiLoader');
const setupMiddlewareLoader = require('./setupMiddlewareLoader');
const servicesMiddlewareLoader = require('./servicesMiddlewareLoader');

const preloaderSetup = (params) => {
  const {
    app,
    mongodb,
    config,
    logger,
    express
  } = params;

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

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
