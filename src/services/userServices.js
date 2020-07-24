const { throwIfMissing } = require('../utils');

class UserServices {
  constructor(opts) {
    Object.assign(this, opts);
    throwIfMissing(opts.UserDbConnector, 'must supply opts.UserDbConnector');
    throwIfMissing(opts.config, 'must supply opts.config');
    throwIfMissing(opts.logger, 'must supply opts.logger');
  }

  async getAllUsers() {
    const users = await this.UserDbConnector.find();
    return users;
  }
}

module.exports = UserServices;
