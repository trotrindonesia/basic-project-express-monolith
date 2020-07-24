const homeRouters = require('./home');
const userRouters = require('./users');

module.exports = [
  ...homeRouters,
  ...userRouters
];
