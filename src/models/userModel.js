const BaseModel = require('./baseModel');

class UserModel extends BaseModel {
  constructor(opts) {
    super(opts);
    Object.assign(this, opts);
    this.collection = this.db.collection('users');
  }
}

module.exports = UserModel;
