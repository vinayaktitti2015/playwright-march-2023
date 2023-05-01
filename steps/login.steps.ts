import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pageobjects/loginPage.po.ts";

const page = new LoginPage();

Given("I go to {string}", function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("I type username", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("I type password", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("I click login button", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("I should successfully login", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
