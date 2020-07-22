const { createConnectionString } = require('../utils');

const _connectDb = async (mongodb, dbConfig, logger) => {
  const { MongoClient } = mongodb;
  const connectionString = createConnectionString(dbConfig);
  logger.info(`connecting to: ${connectionString}...`);
  const client = await MongoClient.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  if (client) {
    logger.info('database connected');
  }
  return {
    db: client.db(dbConfig.database),
    client
  };
};

const dbConnector = async (app, mongodb, dbConfig, logger) => {
  app.locals.mongo = await _connectDb(mongodb, dbConfig, logger);
};

module.exports = dbConnector;
