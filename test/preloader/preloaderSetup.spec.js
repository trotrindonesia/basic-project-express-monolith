const { expect } = require('chai');
const sinon = require('sinon');
const randomstring = require('randomstring');

const { preloaderSetup } = require('../../src/preloaders');

describe('preloaderSetup', () => {
  const app = {
    use: () => sinon.stub(),
    set: () => sinon.stub(),
    engine: () => sinon.spy(),
    locals: {
      mongo: sinon.stub()
    }
  };
  const express = {
    json: () => sinon.stub(),
    urlencoded: () => {
      return { extended: true };
    }
  };
  const mongodb = {
    MongoClient: {
      connect: sinon.stub()
    }
  };
  const config = {
    database: {
      instances: randomstring.generate(),
      options: randomstring.generate(),
      database: randomstring.generate(),
      username: randomstring.generate(),
      password: randomstring.generate()
    }
  };
  const logger = {
    info: sinon.stub()
  };

  it('it should preloaderSetup called', () => {
    const params = {
      app,
      mongodb,
      config,
      logger,
      express
    };

    preloaderSetup(params);
    expect(app.called);
  });
});
