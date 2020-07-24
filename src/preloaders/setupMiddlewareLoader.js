const { setupMiddleware } = require('../middlewares');

const setupMiddlewareLoader = (app, mongodb, config, logger) => {
  const setup = setupMiddleware(app, mongodb, config, logger);
  app.use(setup);
};

module.exports = setupMiddlewareLoader;
