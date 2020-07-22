const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { homeWebHandler } = require('../../../../src/handlers');

const { expect } = chai;

chai.should();
chai.use(sinonChai);

describe('homeWebHandler', () => {
  const sandbox = sinon.createSandbox();
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    mockRequest = sandbox.stub();
    mockResponse = {
      render: sandbox.stub()
    };
  });

  afterEach(() => {
    mockRequest = null;
    mockResponse = null;
    sandbox.restore();
  });

  it('should send function called', () => {
    homeWebHandler(mockRequest, mockResponse);
    expect(mockResponse.render).calledOnce;
  });

  it('should send result', () => {
    const mockResult = {
      message: 'Hallo'
    };

    homeWebHandler(mockRequest, mockResponse);
    mockResponse.render = mockResult;
    expect(mockResponse.render).to.deep.equal(mockResult);
  });
});
