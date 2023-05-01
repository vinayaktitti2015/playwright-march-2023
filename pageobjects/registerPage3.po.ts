import { expect, Locator, Page } from "@playwright/test";

const getRegisterLink: string = ".ico-register";
const getGender = "#gender-male";
const getFirstname = "#FirstName";
const getLastname = "#LastName";
const getEmail = "#Email";
const getPassword = "#Password";
const getPasswordConfirmation = "#ConfirmPassword";
const getCompany = "#Company";
const getNewsletter = "#Newsletter";
const getRegisterButton = "#register-button";

export class RegisterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // stateless functions
  async goto() {
    await this.page.goto("https://demo.nopcommerce.com/");
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForTimeout(5000);
  }

  async clickRegisterLink() {
    await this.page.locator(getRegisterLink).click();
    await this.page.waitForTimeout(5000);
  }

  async formSubmission(firstName, lastName, company, email, password) {
    //await this.page.locator(getGender).waitFor();
    await this.page.waitForSelector(getGender)
    await this.page.locator(getGender).check();
    await this.page.locator(getFirstname).fill(firstName);
    await this.page.locator(getLastname).fill(lastName);
    await this.page.locator(getEmail).fill(email);
    await this.page.locator(getCompany).fill(company);
    await this.page.locator(getPassword).fill(password);
    await this.page.locator(getPasswordConfirmation).fill(password);
    await this.page.locator(getRegisterButton).click();
  }
}
