const templateLoader = require('./templateLoader');
const staticPathLoader = require('./staticPathLoader');
const routesLoader = require('./routesLoader');
const loggerLoader = require('./loggerLoader');
const errorHandlerLoader = require('./errorHandlerLoader');
const preloaderSetup = require('./preloaderSetup');
const swaggerUiLoader = require('./swaggerUiLoader');
const sessionLoader = require('./sessionLoader');

module.exports = {
  staticPathLoader,
  templateLoader,
  routesLoader,
  loggerLoader,
  errorHandlerLoader,
  preloaderSetup,
  swaggerUiLoader,
  sessionLoader
};
