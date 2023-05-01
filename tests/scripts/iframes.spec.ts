import { test, expect } from "@playwright/test";

// test suite
test.describe("handling iframes", () => {
  // hooks without desc
  //   test.beforeEach(async ({ page }) => {

  //   });

  // test case with desc
  test("test iframes", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const firstname = await page
      .frameLocator("#frame-one1434677811")
      .locator("#RESULT_TextField-1");

    const lastname = await page
      .frameLocator("#frame-one1434677811")
      .locator("#RESULT_TextField-2");

    const phonenumber = await page
      .frameLocator("#frame-one1434677811")
      .locator("#RESULT_TextField-3");

    await firstname.fill("James");
    await lastname.fill("Smith");
    await phonenumber.fill("91023232323");
    await page
      .frameLocator("#frame-one1434677811")
      .locator('[name="Submit"]')
      .click();
  });

  test("nested iframes", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/nested_frames");
    const topiframe = page.frameLocator('[name="frame-top"]');
    const frameleft = await topiframe
      .frameLocator('[name="frame-left"]')
      .locator("body");

    await expect(frameleft).toHaveText("LEFT");

    const framemiddle = await topiframe
      .frameLocator('[name="frame-middle"]')
      .locator("body");

    await expect(framemiddle).toHaveText("MIDDLE");

    const frameright = await topiframe
      .frameLocator('[name="frame-right"]')
      .locator("body");

    await expect(frameright).toHaveText("RIGHT");
  });
});
