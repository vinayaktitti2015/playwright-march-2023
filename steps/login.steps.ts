import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pageobjects/loginPage.po";
import { page } from "./global";
const data = require("../fixtures/credentials.json");

Given("I open the website", async () => {
  // Write code here that turns the phrase above into concrete actions
  const loginpage = new LoginPage(page);
  //await loginpage.goto();
});

When("I type username", async () => {
  // Write code here that turns the phrase above into concrete actions
  const loginpage = new LoginPage(page);
  await loginpage.enterusername(data.username);
});

When("I type password", async () => {
  // Write code here that turns the phrase above into concrete actions
  const loginpage = new LoginPage(page);
  await loginpage.enterpassword(data.password);
});

When("I click login button", async () => {
  // Write code here that turns the phrase above into concrete actions
  const loginpage = new LoginPage(page);
  await loginpage.clickLogin();
});

Then("I should successfully login", async () => {
  // Write code here that turns the phrase above into concrete actions
  const loginpage = new LoginPage(page);
  await loginpage.verifyDashboard("You logged into a secure area!");
});
