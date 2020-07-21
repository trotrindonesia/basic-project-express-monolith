const { webRouters, apiRouters } = require('../routes');

const routesLoader = (app) => {
  app.use('/api', apiRouters);
  app.use(webRouters);
};

module.exports = routesLoader;
