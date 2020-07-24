const nunjucks = require('nunjucks');
const path = require('path');

const viewPath = path.join(__dirname, '../views');

const templateLoader = (app) => {
  nunjucks.configure(viewPath, {
    autoescape: true,
    express: app
  });
};

module.exports = templateLoader;
