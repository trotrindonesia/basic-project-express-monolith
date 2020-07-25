const loggerLoader = require('./loggerLoader');
const routesLoader = require('./routesLoader');
const sessionLoader = require('./sessionLoader');
const templateLoader = require('./templateLoader');
const swaggerUiLoader = require('./swaggerUiLoader');
const staticPathLoader = require('./staticPathLoader');
const errorHandlerLoader = require('./errorHandlerLoader');
const setupMiddlewareLoader = require('./setupMiddlewareLoader');
const servicesMiddlewareLoader = require('./servicesMiddlewareLoader');

const preloaderSetup = (params) => {
  const {
    app,
    mongodb,
    config,
    logger,
    express,
    cors
  } = params;

  app.use(cors(config.corsOptions));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  sessionLoader(app, config, logger);
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
