import { setup, tearDown } from "./helpers";

import { afterAll, beforeAll, expect, it } from "@jest/globals";

beforeAll(async () => {
  await setup();
});

afterAll(async () => {
  await tearDown();
});

it("should pass", () => {
  expect(true).toBe(true);
});
