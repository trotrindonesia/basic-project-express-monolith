const sinon = require('sinon');
const { expect } = require('chai');
const randomstring = require('randomstring');

const { dbConnector } = require('../../src/connectors');

describe('dbConnector', () => {
  const app = {
    locals: {
      mongo: sinon.stub()
    }
  };
  const db = randomstring.generate();
  const client = {
    db: sinon.stub().returns(db)
  };
  const mongodb = {
    MongoClient: {
      connect: sinon.stub().returns(client)
    }
  };
  const dbConfig = {
    instances: randomstring.generate(),
    options: randomstring.generate(),
    database: randomstring.generate(),
    username: randomstring.generate(),
    password: randomstring.generate()
  };
  const logger = {
    info: sinon.stub()
  };

  it('should call `dbConnector`', async () => {
    await dbConnector(app, mongodb, dbConfig, logger);
    expect(mongodb.MongoClient.connect.calledOnce).to.equal(true);
  });

  it('should call `dbConnector` with undefined response', async () => {
    mongodb.MongoClient.connect = () => false;
    await dbConnector(app, mongodb, dbConfig, logger);
    expect(mongodb.MongoClient.connect.calledOnce).to.equal(undefined);
  });
});
