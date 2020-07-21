const { expect } = require('chai');
const sinon = require('sinon');
const { preloaderSetup } = require('../../src/preloaders');

describe('preloaderSetup', () => {
  const app = {
    use: () => sinon.spy(),
    set: () => sinon.spy(),
    engine: () => sinon.spy()
  };

  it('it should preloaderSetup called', () => {
    preloaderSetup(app);
    expect(app.called);
  });
});
