const homeApiRouters = require('./home');
const userApiRouters = require('./users');

module.exports = [
  ...homeApiRouters,
  ...userApiRouters
];
