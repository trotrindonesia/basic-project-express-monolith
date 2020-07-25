const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const {
  errors: { BadRequestError }
} = require('custom-error-exceptions');

const { requestValidationSchema } = require('../../src/utils');

chai.use(sinonChai);

describe('requestValidationSchema', () => {
  let req;
  let res;
  let next;
  let func;
  let schema;

  beforeEach(() => {
    req = {
      body: {
        key1: 'key1',
        key2: 'key2'
      }
    };
    res = sinon.stub();
    next = sinon.stub().returns();
    schema = () => {
      return {
        value: req.body,
        error: false
      };
    };
    func = requestValidationSchema(schema);
  });

  afterEach(() => {
    req = null;
    res = null;
    func = null;
    schema = null;
    next = null;
  });

  it('it should continue executing next middleware if params is valid', () => {
    const nextResponse = undefined;
    next.returns(nextResponse);
    func(req, res, next);
    expect(next).to.have.been.calledWithExactly();
  });

  it('it should return error if params is invalid', () => {
    const nextResponse = new BadRequestError('error');
    next.returns(nextResponse);
    schema = () => {
      return {
        value: req.body,
        error: true
      };
    };
    func = requestValidationSchema(schema);
    func(req, res, next);
    expect(next.getCall(0).returnValue).to.have.been.instanceOf(BadRequestError);
  });
});
