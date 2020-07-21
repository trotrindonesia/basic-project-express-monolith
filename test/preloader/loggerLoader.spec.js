const { expect } = require('chai');
const sinon = require('sinon');
const { loggerLoader } = require('../../src/preloaders');

describe('loggerLoader', () => {
  const app = {
    use: () => sinon.spy()
  };

  it('it should loggerLoader called', () => {
    loggerLoader(app);
    expect(app.called);
  });
});
