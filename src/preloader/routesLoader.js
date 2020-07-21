const { webRouters, apiRouters } = require('../routes');

module.exports = (app) => {
  app.use('/api', apiRouters);
  app.use(webRouters);
};
