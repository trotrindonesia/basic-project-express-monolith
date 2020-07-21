const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const docs = path.join(__dirname, '../../docs/swagger.yaml');

const swaggerUiLoader = (app) => {
  const swaggerDocument = YAML.load(docs);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

module.exports = swaggerUiLoader;
