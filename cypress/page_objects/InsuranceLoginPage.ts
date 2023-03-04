class InsuranceLoginPage {
  getInsurancePageUrl() {
    return "https://demo.guru99.com/insurance/v1/index.php";
  }

  getEmailInput() {
    return cy.get("#email");
  }

  getPasswordInput() {
    return cy.get("#password");
  }

  getLoginButton() {
    return cy.contains("Log in");
  }

  getErrorMessageSpan() {
    return cy.get("#login-form > div:nth-child(2) > span > b");
  }

  enterInvalidEmailAndPassword() {
    this.getEmailInput().type("malab84616@idurse.com");
    this.getPasswordInput().type("Pass@123");
  }

  enterValidEmailAndPassword() {
    this.getEmailInput().type("malab84616@idurse.com");
    this.getPasswordInput().type("Pass#1234");
  }

  handleValidateLoginError() {
    cy.on("uncaught:exception", (e) => {
      if (e.message.includes("validateLogin is not defined")) {
        return false;
      }
      // on any other error message the test fails
    });
  }

  getAccoutPageHeader() {
    return cy.get("div[id='tabs-1'] h2");
  }
}

export default InsuranceLoginPage;
