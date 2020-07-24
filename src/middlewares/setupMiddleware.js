const { dbConnector } = require('../connectors');
const { UserModel } = require('../models');

const createSetupMiddleware = (app, mongodb, config, logger) => {
  const { database: dbConfig } = config;
  dbConnector(app, mongodb, dbConfig, logger);
  return async (req, res, next) => {
    const { db } = app.locals.mongo;
    res.locals.config = config;
    res.locals.UserDbConnector = new UserModel({ db });
    next();
  };
};

module.exports = createSetupMiddleware;
