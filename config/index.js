const path = require('path');

const envfile = path.join(__dirname, '../.env');
require('dotenv').config({ path: envfile });

const nodeEnv = String(process.env.NODE_ENV);
const httpPort = String(process.env.HTTP_PORT);

const database = {
  instances: String(process.env.DB_INSTANCES),
  driver: String(process.env.DB_DRIVER),
  options: String(process.env.DB_OPTIONS),
  username: String(process.env.DB_USERNAME),
  password: String(process.env.DB_PASSWORD),
  database: String(process.env.DB_NAME)
};

const corsOptions = {
  exposedHeaders: ['id-token']
};

const sessionConfig = {
  proxy: nodeEnv === 'Production' ? true : false,
  secret: String(process.env.SESS_SECRET),
  name: String(process.env.SESS_NAME),
  resave: Boolean(process.env.SESS_RESAVE),
  saveUninitialized: Boolean(process.env.SESS_SAVE_UNINITIALIZED),
  cookie: {
    secure: nodeEnv === 'Production' ? false : false,
    maxAge: Number(process.env.SESS_MAX_AGE),
    sameSite: Boolean(process.env.SESS_SAME_SITE)
  }
};

const config = {
  httpPort,
  nodeEnv,
  database,
  sessionConfig,
  corsOptions
};

module.exports = config;
