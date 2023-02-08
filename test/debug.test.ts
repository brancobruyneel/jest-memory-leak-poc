import { setup, tearDown } from "./helpers";

import { afterAll, beforeAll, expect, it } from "@jest/globals";

it("should pass", async () => {
  debugger;

  await setup();
  await tearDown();

  debugger;

  for (let i = 0; i < 1_000; i++) {
    await setup();
    await tearDown();
  }

  debugger;

  expect(true).toBe(true);
});
