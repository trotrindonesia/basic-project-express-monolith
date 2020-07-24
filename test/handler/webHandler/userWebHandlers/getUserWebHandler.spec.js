const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { getUserWebHandler } = require('../../../../src/handlers');

const { expect } = chai;

chai.should();
chai.use(sinonChai);

describe('getUserWebHandler', () => {
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
      render: sandbox.stub()
    };
  });

  afterEach(() => {
    mockRequest = null;
    mockResponse = null;
    sandbox.restore();
  });

  it('should render function called', async () => {
    await getUserWebHandler(mockRequest, mockResponse);
    expect(mockResponse.render).calledOnce;
  });

  it('should render result', async () => {
    const mockResult = {
      users: [
        {
          _id: '123',
          username: 'johndoe',
          password: 'yugdjws'
        }
      ]
    };
    mockResponse.locals.UserServices.getAllUsers = async () => mockResult.users;
    await getUserWebHandler(mockRequest, mockResponse);
    mockResponse.render = mockResult;
    expect(mockResponse.render).to.deep.equal(mockResult);
  });
});
