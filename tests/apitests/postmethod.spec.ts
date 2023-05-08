import { test, expect } from "@playwright/test";
import { assert } from "chai";
const payload = require("../../fixtures/payload");
require("dotenv").config();
test.describe("post method", () => {
  test("create a new record ", async ({ request }) => {
    const postrequest = await request.post(`${process.env.HOST}/api/users`, {
      data: {
        name: "morpheus",
        job: "test lead",
      },
    });

    expect(postrequest.status()).toBe(process.env.CREATED);
    const response = await postrequest.json();
    console.log("response: ", response);
    expect(response.name).toBe("morpheus");
    expect(response.job).toBe("test lead");
    6;

    assert.isNotNull(response.id, "id not found");
    assert.isNotNull(response.createdAt, "createdAt not found");
    const string = JSON.stringify(response);
    console.log("string: ", string);
  });

  test("create a new record by passing payload from json file ", async ({
    request,
  }) => {
    const postrequest = await request.post(`${process.env.HOST}/api/users`, {
      data: payload,
    });

    expect(postrequest.status()).toBe(process.env.CREATED);
    const response = await postrequest.json();
    console.log("response: ", response);
    expect(response.name).toBe("morpheus");
    expect(response.job).toBe("test lead");
    6;

    assert.isNotNull(response.id, "id not found");
    assert.isNotNull(response.createdAt, "createdAt not found");
    const string = JSON.stringify(response);
    console.log("string: ", string);
  });
});
