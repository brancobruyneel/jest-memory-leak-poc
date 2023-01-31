const resolve = require("path").resolve;

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globalSetup: resolve(__dirname, "./jest.setup.js"),
  globalTeardown: resolve(__dirname, "./jest.teardown.js"),
};
