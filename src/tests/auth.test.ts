import { describe, expect, test } from "vitest";
import { getAPIKey } from "src/api/auth";


/* Tests for Auth.ts utilities */

/* getAPIKey */
describe("getAPIKey", () => {
  test("returns null when no authorization header", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBe(null);
  });

  test("returns null when authorization header is not ApiKey", () => {
    const headers = { authorization: "Bearer token" };
    expect(getAPIKey(headers)).toBe(null);
  });

  test("returns the API key when authorization header is ApiKey", () => {
    const headers = { authorization: "ApiKey my-api-key" };
    expect(getAPIKey(headers)).toBe("my-api-key");
  });
}); 