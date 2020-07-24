const chai = require('chai');
const sinonChai = require('sinon-chai');

const { throwIfMissing } = require('../../src/utils');

const { expect } = chai;
chai.should();
chai.use(sinonChai);

describe('throwIfMissing', () => {
  it('should throw error if empty args', () => {
    const args = null;
    const message = 'error message';
    expect(() => throwIfMissing(args, message)).to.throw(Error, 'error message');
  });

  it('should not throw error if empty args', () => {
    const args = 'TestDbConnector';
    const message = 'error message';
    expect(throwIfMissing(args, message)).to.equal(undefined);
  });
});
