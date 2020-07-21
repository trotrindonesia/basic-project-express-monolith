const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { homeHandler } = require('../../../src/handlers');

const { expect } = chai;

chai.should();
chai.use(sinonChai);

describe('homeHandler', () => {
  const sandbox = sinon.createSandbox();
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    mockRequest = sandbox.stub();
    mockResponse = {
      send: sandbox.stub()
    };
  });

  afterEach(() => {
    mockRequest = null;
    mockResponse = null;
    sandbox.restore();
  });

  it('should send function called', () => {
    homeHandler(mockRequest, mockResponse);
    expect(mockResponse.send).calledOnce;
  });

  it('should send result', () => {
    const mockResult = {
      message: 'Hallo'
    };

    homeHandler(mockRequest, mockResponse);
    mockResponse.send = mockResult;
    expect(mockResponse.send).to.deep.equal(mockResult);
  });
});
