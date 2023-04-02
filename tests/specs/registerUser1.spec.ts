import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pageobjects/registerPage1.po";
import { faker } from "@faker-js/faker";
test.describe("register feature", () => {
  test.beforeEach(async ({ page }) => {
    const registerPage = new RegisterPage(page);
    registerPage.goto();
  });

  test("should register the user successfully", async ({ page }) => {
    const password = faker.internet.password();

    const registerPage = new RegisterPage(page);
    registerPage.clickRegisterLink();
    registerPage.selectGender();
    registerPage.enterFirstName(faker.name.firstName());
    registerPage.enterLastName(faker.name.lastName());
    registerPage.enterEmail(faker.internet.email());
    registerPage.enterCompanyName(faker.company.name());
    registerPage.selectNewsletter();
    registerPage.enterPassword(password);
    registerPage.enterPasswordConfirmation(password);
    registerPage.clickRegisterButton();
  });
});
