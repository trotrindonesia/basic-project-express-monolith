require('dotenv').config();

const database = {
  instances: process.env.DB_INSTANCES,
  driver: process.env.DB_DRIVER,
  options: process.env.DB_OPTIONS,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

const config = {
  httpPort: process.env.HTTP_PORT,
  database
};

module.exports = config;
