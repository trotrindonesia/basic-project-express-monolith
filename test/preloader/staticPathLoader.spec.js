const { expect } = require('chai');
const sinon = require('sinon');
const { staticPathLoader } = require('../../src/preloaders');

describe('staticPathLoader', () => {
  const app = {
    use: () => sinon.spy()
  };

  it('it should staticPathLoader called', () => {
    staticPathLoader(app);
    expect(app.called);
  });
});
