const { expect } = require('chai');
const sinon = require('sinon');
const { templateLoader } = require('../../src/preloaders');

describe('templateLoader', () => {
  const app = {
    use: () => sinon.spy(),
    set: () => sinon.spy(),
    engine: () => sinon.spy()
  };

  it('it should templateLoader called', () => {
    templateLoader(app);
    expect(app.called);
  });
});
