const apiHandlers = require('./apiHandlers');
const webHandlers = require('./webHandlers');

module.exports = {
  ...apiHandlers,
  ...webHandlers
};
