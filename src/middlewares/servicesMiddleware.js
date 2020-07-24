const { UserServices } = require('../services');

const servicesMiddleware = (req, res, next) => {
  res.locals.UserServices = new UserServices({
    UserDbConnector: res.locals.UserDbConnector,
    config: res.locals.config,
    logger: res.locals.logger
  });

  next();
};

module.exports = servicesMiddleware;
