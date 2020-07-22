const { dbConnector } = require('../connectors');

const createSetupMiddleware = (app, mongodb, config, logger) => {
  const { database: dbConfig } = config;
  dbConnector(app, mongodb, dbConfig, logger);
  return async (req, res, next) => {
    res.locals.config = config;
    next();
  };
};

module.exports = createSetupMiddleware;
