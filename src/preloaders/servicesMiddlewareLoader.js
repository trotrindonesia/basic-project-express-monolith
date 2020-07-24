const { servicesMiddleware } = require('../middlewares');

const servicesMiddlewareLoader = (app) => {
  app.use(servicesMiddleware);
};

module.exports = servicesMiddlewareLoader;
