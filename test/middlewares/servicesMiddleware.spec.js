const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { servicesMiddleware } = require('../../src/middlewares');

chai.use(sinonChai);

describe('middlewares/services', () => {
  it('should continue executing the next middleware', async () => {
    const mockReq = sinon.stub();
    const mockRes = {
      locals: {
        UserDbConnector: sinon.stub(),
        config: sinon.stub(),
        logger: sinon.stub()
      }
    };
    const mockNext = sinon.stub();
    await servicesMiddleware(mockReq, mockRes, mockNext);
    expect(mockNext).to.have.been.calledWithExactly();
  });
});
