import { test, expect, chromium, Page } from "@playwright/test";
import { RegisterPage } from "../../pageobjects/registerPage3.po";
import { faker } from "@faker-js/faker";
test.describe("register feature", () => {
  //let page: Page;
  test.beforeEach(async () => {
    //const registerPage = new RegisterPage(page);
    //registerPage.goto();

    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // page = await context.newPage();
  });

  test("should register the user successfully", async ({ page }) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const company = "Apple";

    // await page.goto("https://demo.nopcommerce.com/");
    // await page.waitForLoadState("networkidle");
    // await page.waitForTimeout(5000);

    const registerPage = new RegisterPage(page);
    await registerPage.goto()
    await registerPage.clickRegisterLink();
    await registerPage.formSubmission(firstName, lastName, company, email, password);
  });
});
