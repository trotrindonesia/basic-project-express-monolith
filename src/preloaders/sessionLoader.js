const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');

const sessionLoader = (app, config, logger) => {
  const { sessionConfig, nodeEnv } = config;
  app.use(cookieParser(sessionConfig.secret));
  if (nodeEnv === 'Production') {
    app.set('trust proxy', 1);
  }
  app.use(session(sessionConfig));
  app.use(flash());
  logger.info('Session created');
};

module.exports = sessionLoader;
