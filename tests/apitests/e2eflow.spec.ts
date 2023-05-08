import { test, expect } from "@playwright/test";
import { assert } from "chai";

let id = "";
test.describe("e2e flow", () => {
  
  test("create a new record ", async ({ request }) => {
    const postrequest = await request.post("https://reqres.in/api/users", {
      data: {
        name: "chris",
        job: "test lead",
      },
    });

    expect(postrequest.status()).toBe(201);
    const response = await postrequest.json();
    console.log("response: ", response);
    expect(response.name).toBe("chris");
    expect(response.job).toBe("test lead");

    id = response.id;
    assert.isNotNull(response.id, "id not found");
    assert.isNotNull(response.createdAt, "createdAt not found");
    const string = JSON.stringify(response);
    console.log("string: ", string);
  });

  test("get id of users endpoint", async ({ request }) => {
    console.log("id: >>", id);
    const getrequest = await request.get("https://reqres.in/api/users/" + id);

    expect(getrequest.status()).toBe(200);
    const response = await getrequest.json();
    console.log("response: ", response);
    expect(response.page).toBe(1);
    expect(response.data[0].first_name).toBe("chris");

    const string = JSON.stringify(response);
    console.log("string: ", string);
  });

  test("update a new record ", async ({ request }) => {
    console.log("id: >>", await id);
    const localID = await id;
    const putrequest = await request.put(
      "https://reqres.in/api/users/" + localID,
      {
        data: {
          name: "chris",
          job: "SDET",
        },
      }
    );

    expect(putrequest.status()).toBe(200);
    const response = await putrequest.json();
    console.log("response: ", response);
    expect(response.name).toBe("chris");
    expect(response.job).toBe("SDET");

    assert.isNotNull(response.updatedAt, "updated at not found");
    const string = JSON.stringify(response);
    console.log("string: ", string);
  });

  test("deleta a new record ", async ({ request }) => {
    console.log("id: >>", id);
    const localID = await id;
    const deleterequest = await request.delete(
      "https://reqres.in/api/users/" + localID
    );

    expect(deleterequest.status()).toBe(204);
  });
});
