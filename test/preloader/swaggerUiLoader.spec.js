const { expect } = require('chai');
const sinon = require('sinon');
const { swaggerUiLoader } = require('../../src/preloaders');

describe('swaggerUiLoader', () => {
  const app = {
    use: () => sinon.spy()
  };

  it('it should swaggerUiLoader called', () => {
    swaggerUiLoader(app);
    expect(app.called);
  });
});
