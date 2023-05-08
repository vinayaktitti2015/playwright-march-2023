import { test, expect } from "@playwright/test";
import { assert } from "chai";

test.describe("e2e flow", () => {
  test("all methods in a single test ", async ({ request }) => {
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

    let id = response.id;
    assert.isNotNull(response.id, "id not found");
    assert.isNotNull(response.createdAt, "createdAt not found");

    // GET METHOD
    console.log("id: >>", id);
    const getrequest = await request.get("https://reqres.in/api/users/" + id);

    expect(getrequest.status()).toBe(200);
    const response2 = await getrequest.json();
    console.log("response: ", response2);
    expect(response.page).toBe(1);
    expect(response.data[0].first_name).toBe("chris");

    // PUT METHOD
    console.log("id: >>", await id);
    const putrequest = await request.put("https://reqres.in/api/users/" + id, {
      data: {
        name: "chris",
        job: "SDET",
      },
    });

    expect(putrequest.status()).toBe(200);
    const response3 = await putrequest.json();
    console.log("response: ", response3);
    expect(response.name).toBe("chris");
    expect(response.job).toBe("SDET");

    assert.isNotNull(response.updatedAt, "updated at not found");
    const string = JSON.stringify(response);
    console.log("string: ", string);

    // DELETE METHOD
    console.log("id: >>", id);
    const deleterequest = await request.delete(
      "https://reqres.in/api/users/" + id
    );

    expect(deleterequest.status()).toBe(204);
  });
});
