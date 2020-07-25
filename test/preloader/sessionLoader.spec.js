const { expect } = require('chai');
const sinon = require('sinon');
const { sessionLoader } = require('../../src/preloaders');

describe('sessionLoader', () => {
  const app = {
    use: () => sinon.spy()
  };

  const config = {
    sessionConfig: {
      secret: 'secret',
      resave: false,
      saveUninitialized: true
    },
    nodeEnv: 'Development'
  };

  const logger = {
    info: sinon.stub()
  };

  it('it should sessionLoader called', () => {
    sessionLoader(app, config, logger);
    expect(app.called);
  });
});
