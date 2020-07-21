const templateLoader = require('./templateLoader');
const staticPathLoader = require('./staticPathLoader');
const routesLoader = require('./routesLoader');
const loggerLoader = require('./loggerLoader');
const errorHandlerLoader = require('./errorHandlerLoader');
const preloaderSetup = require('./preloaderSetup');

module.exports = {
  staticPathLoader,
  templateLoader,
  routesLoader,
  loggerLoader,
  errorHandlerLoader,
  preloaderSetup
};