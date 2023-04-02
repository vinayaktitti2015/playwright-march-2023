import { expect, Locator, Page } from "@playwright/test";

export class RegisterPage {
  readonly page: Page;
  readonly getRegisterLink: Locator;
  readonly getGender: Locator;
  readonly getFirstname: Locator;
  readonly getLastname: Locator;
  readonly getEmail: Locator;
  readonly getPhone: Locator;
  readonly getPassword: Locator;
  readonly getPasswordConfirmation: Locator;
  readonly getCompany: Locator;
  readonly getNewsletter: Locator;
  readonly getRegisterButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getRegisterLink = page.locator(".ico-register");
    this.getGender = page.locator("#gender-male");
    this.getFirstname = page.locator("#FirstName");
    this.getLastname = page.locator("#LastName");
    this.getEmail = page.locator("#Email");
    this.getCompany = page.locator("#Company");
    this.getNewsletter = page.locator("#Newsletter");
    this.getPassword = page.locator("#Password");
    this.getPasswordConfirmation = page.locator("#ConfirmPassword");
    this.getRegisterButton = page.locator("#register-button");
  }

  // stateless functions
  async goto() {
    await this.page.goto("https://demo.nopcommerce.com/");
    await this.page.waitForTimeout(3000)
  }

  async clickRegisterLink() {
    await this.getRegisterLink.waitFor();
    await this.getRegisterLink.click();
  }

  async selectGender() {
    await this.getGender.check();
  }

  async enterFirstName(args) {
    await this.getFirstname.clear();
    await this.getFirstname.fill(args);
  }

  async enterLastName(args) {
    await this.getLastname.clear();
    await this.getLastname.fill(args);
  }

  async enterEmail(args) {
    await this.getEmail.clear();
    await this.getEmail.fill(args);
  }

  async enterCompanyName(args) {
    await this.getCompany.clear();
    await this.getCompany.fill(args);
  }

  async selectNewsletter() {
    await this.getNewsletter.check();
  }

  async enterPassword(args) {
    await this.getPassword.clear();
    await this.getPassword.fill(args);
  }

  async enterPasswordConfirmation(args) {
    await this.getPasswordConfirmation.clear();
    await this.getPasswordConfirmation.fill(args);
  }

  async clickRegisterButton() {
    await this.getRegisterButton.click();
  }
}
