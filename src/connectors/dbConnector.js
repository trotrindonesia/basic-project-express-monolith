const { createConnectionString } = require('../utils');

const dbConnector = async (app, mongodb, dbConfig, logger) => {
  const { MongoClient } = mongodb;
  const connectionString = createConnectionString(dbConfig);
  logger.info(`connecting to: ${connectionString}...`);
  const client = await MongoClient.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  if (client) {
    logger.info('Database connected');
    app.locals.mongo = {
      db: client.db(dbConfig.database),
      client
    };
  }
};

module.exports = dbConnector;
