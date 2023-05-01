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
    try {
      await this.page.goto("https://demo.nopcommerce.com/", {
        waitUntil: "domcontentloaded",
      });
      await this.page.waitForTimeout(3000);
    } catch (err) {
      console.log("Element not found or target closed", err);
    }
  }

  async clickRegisterLink() {
    try {
      await this.page.waitForSelector(".ico-register");
      await this.getRegisterLink.first().click();
      await this.page.waitForTimeout(3000);
    } catch (err) {
      console.log("Element not found or target closed", err);
    }
  }

  async selectGender() {
    try {
      await this.getGender.waitFor();
      await this.getGender.check();
    } catch (err) {
      console.log("Element not found or target closed", err);
    }
  }

  async enterFirstName(args) {
    try {
      await this.getFirstname.clear();
      await this.getFirstname.fill(args);
    } catch (err) {
      console.log("Element not found or target closed", err);
    }
  }

  async enterLastName(args) {
    try {
      await this.getLastname.clear();
      await this.getLastname.fill(args);
    } catch (err) {
      console.log("Element not found or target closed", err);
    }
  }

  async enterEmail(args) {
    try {
      await this.getEmail.clear();
      await this.getEmail.fill(args);
    } catch (err) {
      console.log("Element not found or target closed", err);
    }
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
