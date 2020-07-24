const mongodb = require('mongodb');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const {
  errors: { CustomError, NotFoundError, BadRequestError }
} = require('custom-error-exceptions');

const BaseModel = require('../../src/models/baseModel');

const { ObjectID } = mongodb;
const { expect } = chai;
chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.should();

describe('Base Model', () => {
  let sandbox;
  let mockArgs;
  let model;
  let collectionStub;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    collectionStub = {
      insertOne: sandbox.stub().resolves(),
      insertMany: sandbox.stub().resolves(),
      countDocuments: sandbox.stub().resolves(),
      find: sandbox.stub().returns({
        toArray: sandbox.stub().resolves(),
        sort: sandbox.stub().returns({
          skip: sandbox.stub().returns({
            limit: sandbox.stub().returns({
              toArray: sandbox.stub().resolves([{ ok: true }])
            })
          }),
          toArray: sandbox.stub().resolves()
        })
      }),
      findOne: sandbox.stub().resolves(),
      findOneAndUpdate: sandbox.stub().resolves(),
      findOneAndDelete: sandbox.stub().resolves()
    };
    mockArgs = {
      db: {
        collection: sandbox.stub().returns(collectionStub)
      }
    };
    model = new BaseModel(mockArgs);
  });

  afterEach(() => {
    sandbox.restore();
    mockArgs = null;
    model = null;
  });

  describe('constructor', () => {
    it('should throw if params not supply opts.db', () => {
      expect(() => new BaseModel()).to.throw(
        Error,
        'Database must be fullfilled'
      );
    });
  });

  describe('insertOne', () => {
    it('should called collection.insertOne when called', async () => {
      collectionStub.insertOne.resolves({
        ops: [{ success: true }]
      });
      await model.insertOne('5cadd015714e46d7997fdb95', { doc: 1 });
      expect(collectionStub.insertOne).to.have.been.calledOnce;
    });

    it('should throw error if failed', async () => {
      collectionStub.insertOne.resolves();
      return model.insertOne('5cadd015714e46d7997fdb95').should.eventually.be.rejected.and.to.be.instanceOf(CustomError);
    });
  });

  describe('insertMany', () => {
    it('should throw error if type data of payload not an array', async () => {
      collectionStub.insertOne.resolves();
      return model.insertMany('5cadd015714e46d7997fdb95').should.eventually.be.rejected.and.to.be.instanceOf(BadRequestError);
    });

    it('should called collection.insertMany when called', async () => {
      const data = [
        { name: 'audy' },
        { name: 'sarah' }
      ];
      collectionStub.insertMany.resolves({
        ops: [{ success: true }]
      });
      await model.insertMany(data);
      expect(collectionStub.insertMany).to.have.been.calledOnce;
    });

    it('should throw error if failed', async () => {
      const data = [
        { name: 'audy' },
        { name: 'sarah' }
      ];
      collectionStub.insertMany.resolves();
      return model.insertMany(data).should.eventually.be.rejected.and.to.be.instanceOf(CustomError);
    });
  });

  describe('findOne', () => {
    it('should called collection.findOne when called', async () => {
      collectionStub.findOne.resolves({
        ops: [{ success: true }]
      });
      await model.findOne({ _id: '1234' });
      expect(collectionStub.findOne).to.have.been.calledOnce;
    });
  });

  describe('findById', () => {
    it('should called collection.findById when called', async () => {
      collectionStub.findOne.resolves({
        ops: [{ success: true }]
      });
      const id = new ObjectID();
      await model.findById(id);
      expect(collectionStub.findOne).to.have.been.calledOnce;
    });
  });

  describe('find', () => {
    it('should called collection.find when called', async () => {
      await model.find({ filter: 'filter' });
      expect(collectionStub.find).to.have.been.calledOnce;
    });
  });

  describe('findOneAndUpdate', () => {
    it('should called collection.findOneAndUpdate when called', async () => {
      collectionStub.findOneAndUpdate.resolves({ ok: true });
      await model.findOneAndUpdate({ _id: '1234' }, { name: 'sarah' });
      expect(collectionStub.findOneAndUpdate).to.have.been.calledOnce;
    });

    it('should throw error if failed', async () => {
      collectionStub.findOneAndUpdate.resolves({ ok: false });
      return model.findOneAndUpdate({ _id: '1234' }, { name: 'sarah' }).should.eventually.be.rejected.and.to.be.instanceOf(NotFoundError);
    });
  });

  describe('findOneAndUpdate', () => {
    it('should called collection.findOneAndDelete with result true', async () => {
      collectionStub.findOneAndDelete.resolves({ ok: true });
      const result = await model.findOneAndDelete({ _id: '1234' });
      expect(result).to.equal(true);
    });

    it('should called collection.findOneAndDelete with result false', async () => {
      collectionStub.findOneAndDelete.resolves();
      const result = await model.findOneAndDelete({ _id: '1234' });
      expect(result).to.equal(false);
    });
  });

  describe('findWithPagination', () => {
    it('should called collection.findWithPagination with result and count of data', async () => {
      model.count = () => 1;
      const response = {
        result: [{ ok: true }],
        total: 1
      };
      const result = await model.findWithPagination({ _id: '1234' }, { _id: 1 });
      expect(result).to.deep.equal(response);
    });
  });

  describe('count', () => {
    it('should called collection.countDocuments when called', async () => {
      collectionStub.countDocuments.resolves(1);
      await model.count({ _id: '1234' });
      expect(collectionStub.countDocuments).to.have.been.calledOnce;
    });
  });
});
