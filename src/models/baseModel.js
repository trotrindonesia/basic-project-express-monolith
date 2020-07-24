const mongodb = require('mongodb');
const {
  errors: {
    CustomError,
    NotFoundError,
    BadRequestError
  }
} = require('custom-error-exceptions');

const { ObjectID } = mongodb;

class BaseModel {
  constructor(opts) {
    Object.assign(this, opts);
    if (!this.db) {
      throw new CustomError('Database must be fullfilled');
    }
    this.collection = this.db.collection('test');
  }

  async insertOne(payload) {
    const result = await this.collection.insertOne(payload);
    if (!result) {
      throw new CustomError('Error inserting data to database');
    }
    return result.ops[0];
  }

  async insertMany(payload) {
    const checkIsArray = Array.isArray(payload);
    if (!checkIsArray) {
      throw new BadRequestError('Please makesure the data is an array');
    }
    const result = await this.collection.insertMany(payload);
    if (!result) {
      throw new CustomError('Error updating data to database');
    }
    return result.ops;
  }

  async findOne(filter) {
    const result = await this.collection.findOne(filter);
    return result;
  }

  async findById(id) {
    const objectId = new ObjectID(id);
    const filter = { _id: objectId };
    const result = await this.collection.findOne(filter);
    return result;
  }

  async find(filter) {
    const result = await this.collection.find(filter).sort({ _id: -1 }).toArray();
    return result;
  }

  async findOneAndUpdate(filter, payload, upsert = false) {
    const result = await this.collection.findOneAndUpdate(
      filter,
      { $set: payload },
      {
        returnNewDocument: true,
        returnOriginal: false,
        upsert
      }
    );
    if (!result.ok) {
      throw new NotFoundError();
    }
    return result.value;
  }

  async findOneAndDelete(filter) {
    const result = await this.collection.findOneAndDelete(filter);
    let response = false;
    if (result) {
      response = true;
    }
    return response;
  }

  async findWithPagination(filter, sort, limit = 20, skip = 0) {
    const result = await this.collection.find(filter).sort(sort).skip(skip).limit(limit).toArray();
    const countOfData = await this.count(filter);
    return {
      result,
      total: countOfData
    };
  }

  async count(filter) {
    const result = await this.collection.countDocuments(filter);
    return result;
  }
}

module.exports = BaseModel;
