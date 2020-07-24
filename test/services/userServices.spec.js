const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');

const { UserServices } = require('../../src/services');

const { expect } = chai;
chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.should();

describe('Topup Rintis Service', () => {
  const sandbox = sinon.createSandbox();
  let opts;
  let services;

  beforeEach(() => {
    opts = {
      UserDbConnector: {
        find: async () => sandbox.stub()
      },
      config: sandbox.stub(),
      logger: sandbox.stub()
    };

    services = new UserServices(opts);
  });

  afterEach(() => {
    opts = null;
    services = null;
    sandbox.restore();
  });

  describe('constructor', () => {
    it('should throw if params not supply opts.UserDbConnector', () => {
      expect(() => new UserServices({})).to.throw(
        Error,
        'must supply opts.UserDbConnector'
      );
    });
  });

  describe('getAllUsers', () => {
    it('should return result when success', async () => {
      const mockResult = {
        data: [
          {
            _id: '123',
            username: 'johndoe',
            password: 'yugdjws'
          }
        ]
      };
      opts.UserDbConnector.find = async () => mockResult;
      const result = await services.getAllUsers();
      expect(result).to.deep.equal(mockResult);
    });
  });
});
