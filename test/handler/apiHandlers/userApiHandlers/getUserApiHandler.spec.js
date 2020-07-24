const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { getUserApiHandler } = require('../../../../src/handlers');

const { expect } = chai;

chai.should();
chai.use(sinonChai);

describe('getUserApiHandler', () => {
  const sandbox = sinon.createSandbox();
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    mockRequest = sandbox.stub();
    mockResponse = {
      locals: {
        UserServices: {
          getAllUsers: async () => sinon.stub()
        }
      },
      send: sandbox.stub()
    };
  });

  afterEach(() => {
    mockRequest = null;
    mockResponse = null;
    sandbox.restore();
  });

  it('should send function called', async () => {
    await getUserApiHandler(mockRequest, mockResponse);
    expect(mockResponse.send).calledOnce;
  });

  it('should send result', async () => {
    const mockResult = {
      data: [
        {
          _id: '123',
          username: 'johndoe',
          password: 'yugdjws'
        }
      ]
    };
    mockResponse.locals.UserServices.getAllUsers = async () => mockResult;
    await getUserApiHandler(mockRequest, mockResponse);
    mockResponse.send = mockResult;
    expect(mockResponse.send).to.deep.equal(mockResult);
  });
});
