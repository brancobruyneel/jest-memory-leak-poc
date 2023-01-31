const { MongoMemoryServer } = require("mongodb-memory-server");

module.exports = async () => {
  global.__MONGOD__ = await MongoMemoryServer.create();

  const mongoUri = global.__MONGOD__.getUri();

  process.env.MONGO_URI = mongoUri;
};
