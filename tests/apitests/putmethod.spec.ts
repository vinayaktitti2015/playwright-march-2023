import { test, expect } from "@playwright/test";
import { assert } from "chai";

test.describe("put method", () => {
  test("create a new record ", async ({ request }) => {
    const putrequest = await request.put("https://reqres.in/api/users/2", {
      data: {
        name: "morpheus",
        job: "SDET",
      },
    });

    expect(putrequest.status()).toBe(200);
    const response = await putrequest.json();
    console.log("response: ", response);
    expect(response.name).toBe("morpheus");
    expect(response.job).toBe("SDET");
    6;

    assert.isNotNull(response.updatedAt, "updated at not found");
    const string = JSON.stringify(response);
    console.log("string: ", string);
  });
});
