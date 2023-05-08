import { test, expect } from "@playwright/test";
import { assert } from "chai";

test.describe("check list of users endpoint", () => {
  test("get list of users endpoint", async ({ request }) => {
    const getrequest = await request.get("https://reqres.in/api/users?page=2");

    expect(getrequest.status()).toBe(200);
    const response = await getrequest.json();
    console.log("response: ", response);
    expect(response.page).toBe(2);
    expect(response.per_page).toBe(6);
    expect(response.data[0].email).toBe("michael.lawson@reqres.in");
    expect(response.data[0].first_name).toBe("Michael");
    expect(response.data[0].last_name).toBe("Lawson");

    const string = JSON.stringify(response);
    console.log("string: ", string);
  });

  test("get list of users endpoint dynamic data", async ({ request }) => {
    const getrequest = await request.get("https://reqres.in/api/users?page=2");

    expect(getrequest.status()).toBe(200);
    const response = await getrequest.json();
    console.log("response: ", response);
    expect(response.page).toBe(2);
    expect(response.per_page).toBe(6);
    assert.isNotNull(response.data[0].email, "email is not found");
    assert.isNotNull(response.data[0].first_name, "first name is not found");
    assert.isNotNull(response.data[0].last_name, "last name is not found");

    const string = JSON.stringify(response);
    console.log("string: ", string);
  });

  test("get list of users endpoint iterate data", async ({ request }) => {
    const getrequest = await request.get("https://reqres.in/api/users?page=2");

    expect(getrequest.status()).toBe(200);
    const response = await getrequest.json();
    console.log("response: ", response);
    expect(response.page).toBe(2);
    expect(response.per_page).toBe(6);

    console.log("length: ", response.data.length);

    for (let i = 0; i < response.data.length; i++) {
      assert.isNotNull(response.data[i].email, "email is not found");
      console.log(response.data[i].email);
      assert.isNotNull(response.data[i].first_name, "first name is not found");
      assert.isNotNull(response.data[i].last_name, "last name is not found");
    }

    const string = JSON.stringify(response);
    console.log("string: ", string);
  });
});
