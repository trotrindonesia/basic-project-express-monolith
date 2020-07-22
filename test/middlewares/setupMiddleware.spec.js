const chai = require('chai');
const sinon = require('sinon');
const randomstring = require('randomstring');

const { setupMiddleware } = require('../../src/middlewares');

const { expect } = chai;

describe('setupMiddleware', () => {
  let req;
  let res;
  let next;
  let client;
  let mongodb;
  let config;
  let app;
  let logger;
  let db;
  let func;

  beforeEach(() => {
    app = {
      locals: {
        mongo: sinon.stub()
      }
    };
    db = randomstring.generate();
    client = {
      db: sinon.stub().returns(db)
    };
    mongodb = {
      MongoClient: {
        connect: sinon.stub().returns(client)
      }
    };
    config = {
      database: {
        instances: randomstring.generate(),
        options: randomstring.generate(),
        database: randomstring.generate(),
        username: randomstring.generate(),
        password: randomstring.generate()
      }
    };
    logger = {
      info: sinon.stub()
    };
    req = randomstring.generate();
    res = {
      locals: {
        config: sinon.stub()
      }
    };
    next = sinon.stub().returns();
    func = setupMiddleware(app, mongodb, config, logger);
  });

  it('should return a function that calls `next`', async () => {
    const nextResponse = randomstring.generate();
    next.returns(nextResponse);
    const response = await func(req, res, next);
    expect(response).to.equal(undefined);
    expect(next.calledWith(undefined)).to.equal(false);
  });
});
