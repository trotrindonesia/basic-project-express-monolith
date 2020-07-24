const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { createConnectionString } = require('../../src/utils');

const { expect } = chai;

chai.should();
chai.use(sinonChai);

describe('createConnectionString', () => {
  const sandbox = sinon.createSandbox();
  let config;

  beforeEach(() => {
    config = {
      instances: 'localhost:27017',
      options: '',
      database: 'test',
      username: '',
      password: ''
    };
  });

  afterEach(() => {
    config = null;
    sandbox.restore();
  });

  it('should createConnectionString function called', () => {
    expect(createConnectionString(config)).to.equal('mongodb://localhost:27017/test');
  });

  it('should createConnectionString with username password', () => {
    config = {
      instances: 'localhost:27017',
      options: '',
      database: 'test',
      username: 'root',
      password: 'admin'
    };
    expect(createConnectionString(config)).to.equal('mongodb://root:admin@localhost:27017/test');
  });

  it('should createConnectionString with username password & options', () => {
    config = {
      instances: 'localhost:27017',
      options: 'replicaset=true',
      database: 'test',
      username: 'root',
      password: 'admin'
    };
    expect(createConnectionString(config)).to.equal('mongodb://root:admin@localhost:27017/test?replicaset=true');
  });
});
