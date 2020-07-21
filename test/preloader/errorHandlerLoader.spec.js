const { expect } = require('chai');
const sinon = require('sinon');
const { errorHandlerLoader } = require('../../src/preloaders');

describe('errorHandlerLoader', () => {
  const app = {
    use: () => sinon.spy()
  };

  it('it should errorHandlerLoader called', () => {
    errorHandlerLoader(app);
    expect(app.called);
  });
});
