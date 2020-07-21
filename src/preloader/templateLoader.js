const hbs = require('express-handlebars');
const path = require('path');

const viewPath = path.join(__dirname, '../views');

const templateLoader = (app) => {
  app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(viewPath, 'layouts/main'),
    partialsDir: path.join(viewPath, 'layouts/partials')
  }));
  app.set('view engine', '.hbs');
  app.set('views', viewPath);
};

module.exports = templateLoader;
