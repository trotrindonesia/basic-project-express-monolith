require('dotenv').config();

const nodeEnv = process.env.NODE_ENV;
const httpPort = process.env.HTTP_PORT;

const database = {
  instances: process.env.DB_INSTANCES,
  driver: process.env.DB_DRIVER,
  options: process.env.DB_OPTIONS,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

const corsOptions = {
  exposedHeaders: ['id-token']
};

const sessionConfig = {
  proxy: nodeEnv === 'Production' ? true : false,
  secret: process.env.SESS_SECRET,
  name: process.env.SESS_NAME,
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
