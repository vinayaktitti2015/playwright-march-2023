import { test, expect } from "@playwright/test";
import RegisterPage2 from "../../pageobjects/registerPage2.po";
import { faker } from "@faker-js/faker";
import LoginPage from "../../pageobjects/loginPage.po";
const text = require("../../fixtures/strings.json");
test.describe("register feature", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/");
    await page.waitForTimeout(3000);
  });

  test("should register the user successfully", async ({ page }) => {
    const password = faker.internet.password();

    const registerPage = new RegisterPage2();
    const loginPage = new LoginPage();

    // click login
    await page
      .locator(loginPage.getLoginLink())
      .click()
      .then(async () => {
        await expect(page.locator(loginPage.getPageTitles())).toHaveText(
          text.title
        );
        await page
          .locator(loginPage.getRegisterButton())
          .click()
          .then(async () => {
            // switch to register page
            await page.locator(registerPage.getRegisterLink()).click();
            await page.locator(registerPage.getGender()).first().check();
            await page
              .locator(registerPage.getFirstname())
              .fill(faker.name.firstName());
            await page
              .locator(registerPage.getLastname())
              .fill(faker.name.lastName());
            await page
              .locator(registerPage.getEmail())
              .fill(faker.internet.email());
            await page
              .locator(registerPage.getCompany())
              .fill(faker.company.name());
            await page.locator(registerPage.getPassword()).fill(password);
            await page
              .locator(registerPage.getPasswordConfirmation())
              .fill(password);
            await page
              .locator(registerPage.getRegisterButton())
              .click()
              .then(async () => {
                // verify register successfully
                await page.waitForTimeout(5000);
                await expect(
                  page.getByText("Your registration completed")
                ).toBeVisible();
              });
          });
      });
  });
});
