import { afterAll, beforeAll, expect, it } from "@jest/globals";
import { MongoClient } from "mongodb";

let client: MongoClient | undefined;

beforeAll(async () => {
  client = new MongoClient(
    process.env.MONGO_URI ?? "mongodb://localhost:27017"
  );
});

afterAll(async () => {
  await client?.close();
});

it("should show stats", async () => {
  const stats = await client?.db().stats();

  expect(stats).not.toBeUndefined();
});
