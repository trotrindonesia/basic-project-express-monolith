const homeWebHandlers = require('./homeWebHandlers');
const userWebHandlers = require('./userWebHandlers');

module.exports = {
  ...homeWebHandlers,
  ...userWebHandlers
};
