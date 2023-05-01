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
    await registerPage.clickRegisterLink();
    await registerPage.selectGender();
    await registerPage.enterFirstName(faker.name.firstName());
    await registerPage.enterLastName(faker.name.lastName());
    await registerPage.enterEmail(faker.internet.email());
    await registerPage.enterCompanyName(faker.company.name());
    await registerPage.selectNewsletter();
    await registerPage.enterPassword(password);
    await registerPage.enterPasswordConfirmation(password);
    await registerPage.clickRegisterButton();
  });
});
