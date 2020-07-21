const {
  handlers: { errorHandler }
} = require('custom-error-exceptions');

const errorHandlerLoader = (app) => {
  app.use(errorHandler);
};

module.exports = errorHandlerLoader;
