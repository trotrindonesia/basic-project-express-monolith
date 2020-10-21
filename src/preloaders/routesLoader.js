const express = require('express');

const { webRouters, apiRouters } = require('../routes');

const routesLoader = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api', apiRouters);
  app.use(webRouters);
};

module.exports = routesLoader;
