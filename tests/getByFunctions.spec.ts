import { test, expect } from "@playwright/test";

test("getter functions", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");

  // input firstname
  await page.locator("#firstName").fill("James");
  //await page.keyboard.press("ENTER");
  await page.waitForTimeout(2000);

  // get inner value
  const value = await page.locator("#firstName").inputValue();
  await expect(value).toEqual("James");

  // input firstname
  const email = page.locator("#userEmail");
  await email.fill("James@yahoo.com");
  //await page.keyboard.press("ENTER");
  await page.waitForTimeout(2000);

  // get inner value
  const emailValue = await email.inputValue();
  await expect(emailValue).toEqual("James@yahoo.com");

  // get inner text
  const title = await page.locator(".main-header").innerText();
  await expect(title).toEqual("Practice Form");

  // get inner html
  const innerhtml = await page.locator(".main-header").innerHTML();
  await expect(innerhtml).toContain("Practice Form");
});

test.only("test nopcommerce", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  const href = await page.getByText("Computers").first().getAttribute("href");
  await expect(href).toContain("/computers");

  const src = await page
    .getByAltText("nopCommerce demo store")
    .getAttribute("src");

  await expect(src).toContain(
    "https://demo.nopcommerce.com/Themes/DefaultClean/Content/images/logo.png"
  );
});
