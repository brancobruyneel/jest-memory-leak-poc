import { Db, MongoClient, MongoClientOptions } from 'mongodb';

let cachedClient: MongoClient | undefined;

export const connectToDatabase = async (
  uri: string,
  options?: MongoClientOptions,
): Promise<Db> => {
  if (cachedClient) {
    return cachedClient.db();
  }

  const client = new MongoClient(uri, options);

  cachedClient = await client.connect();

  const database = db();

  await createIndexes(database);

  return database;
};

export const closeDatabaseConnection = async (): Promise<void> => {
  try {
    await cachedClient?.close();
  } finally {
    cachedClient = undefined;
  }
};

export const db = (): Db => {
  if (!cachedClient) throw new Error('Database connection closed');

  return cachedClient.db();
};

export const createIndexes = async (db: Db): Promise<void> => {
  await db.stats();
};
