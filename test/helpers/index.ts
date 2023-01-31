import { closeDatabaseConnection, connectToDatabase } from "../../src/mongo";

export async function setupIntegrationTestEnvironment(): Promise<void> {
  await connectToDatabase(
    process.env.__MONGO_URI__ ?? "mongodb://localhost:27017"
  );
}

export async function tearDownIntegrationTestEnvironment(): Promise<void> {
  await closeDatabaseConnection();
}
