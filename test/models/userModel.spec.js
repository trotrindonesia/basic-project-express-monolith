const chai = require('chai');

const { UserModel } = require('../../src/models');

const { expect } = chai;

describe('UserModel', () => {
  describe('constructor', () => {
    it('should throw if params not supply opts.db', () => {
      expect(() => new UserModel()).to.throw(
        Error,
        'Database must be fullfilled'
      );
    });
  });
});
