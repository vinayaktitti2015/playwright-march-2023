import { expect, Locator, Page } from "@playwright/test";

const username_input = "#username";
const password_input = "#password";
const login_btn = '[type="submit"]';
const message = "#flash";
const subheader = ".subheader";
const logout_btn = ".subheader + a";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // stateless functions
  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForTimeout(5000);
  }

  async enterusername(username: string) {
    await this.page.locator(username_input).fill(username);
  }

  async enterpassword(password: string) {
    await this.page.locator(password_input).fill(password);
  }

  async clickLogin() {
    await this.page.locator(login_btn).click();
  }

  // async userLogin(username, password) {
  //   //await this.page.locator(getGender).waitFor();
  //   await this.page.waitForSelector(username);
  //   await this.page.locator(username).fill(username);
  //   await this.page.locator(password).fill(password);
  //   await this.page.locator(login_btn).click();
  // }

  async verifyDashboard(message: string) {
    const locator = await this.page.locator(message);
    await expect(locator).toContain(message);
  }
}
