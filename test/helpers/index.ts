import { closeDatabaseConnection, connectToDatabase } from "../../src/mongo";

export async function setupIntegrationTestEnvironment(): Promise<void> {
  const database = await connectToDatabase(
    process.env.__MONGO_URI__ ?? "mongodb://localhost:27017"
  );

  // console.log(await database.stats());

  // this leaks memory
  await database.stats();
}

export async function tearDownIntegrationTestEnvironment(): Promise<void> {
  await closeDatabaseConnection();
}
