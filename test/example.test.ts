import {
  setupIntegrationTestEnvironment,
  tearDownIntegrationTestEnvironment,
} from "./helpers";

import { beforeAll, it } from "@jest/globals";

debugger;

beforeAll(async () => {
  await setupIntegrationTestEnvironment();
  await tearDownIntegrationTestEnvironment();

  debugger;

  // for (let i = 0; i < 10_000; i++) {
  //   await setupIntegrationTestEnvironment();
  //   await tearDownIntegrationTestEnvironment();
  // }

  debugger;
});

it.todo("should pass");
