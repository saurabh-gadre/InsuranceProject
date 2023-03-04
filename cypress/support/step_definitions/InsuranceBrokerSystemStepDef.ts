// HomePage.steps.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InsuranceLoginPage from "../../page_objects/InsuranceLoginPage";

const loginPage = new InsuranceLoginPage();

Given("User launches Insurance Broker System Application", () => {
  cy.visit(loginPage.getInsurancePageUrl());
  cy.wait(6000);
});

When("User enter valid email and invalid password", () => {
  loginPage.enterInvalidEmailAndPassword();
});

When("User enter valid email and valid password", () => {
  loginPage.enterValidEmailAndPassword();
});

When("User clicks on Login Button", () => {
  loginPage.getLoginButton().click();
  loginPage.handleValidateLoginError();
  cy.wait(5000);
});

Then("User should be presented with login error message", () => {
  loginPage
    .getErrorMessageSpan()
    .should("have.text", "Enter your Email address and password correct");
});

Then("User login succeeds and user is on the account page", () => {
  cy.url().should("include", "/insurance/v1/header.php");
  loginPage
    .getAccoutPageHeader()
    .should("have.text", "Broker Insurance WebPage");
});
