import { closeDatabaseConnection, connectToDatabase } from "../../src/mongo";

export async function setup(): Promise<void> {
  const database = await connectToDatabase(
    process.env.MONGO_URI ?? "mongodb://localhost:27017"
  );

  // this leaks memory
  await database.stats();
}

export async function tearDown(): Promise<void> {
  await closeDatabaseConnection();
}
