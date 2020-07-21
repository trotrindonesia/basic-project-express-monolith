const { expect } = require('chai');
const sinon = require('sinon');
const { routesLoader } = require('../../src/preloaders');

describe('routesLoader', () => {
  const app = {
    use: () => sinon.spy()
  };

  it('it should routesLoader called', () => {
    routesLoader(app);
    expect(app.called);
  });
});
