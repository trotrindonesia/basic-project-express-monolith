const homeApiHandlers = require('./homeApiHandlers');
const userApiHandlers = require('./userApiHandlers');

module.exports = {
  ...homeApiHandlers,
  ...userApiHandlers
};
