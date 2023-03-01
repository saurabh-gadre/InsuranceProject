describe("Insurance Broker System Application spec", () => {
  beforeEach("before test", () => {
    cy.visit("https://demo.guru99.com/insurance/v1/index.php");
    cy.wait(6000);
  });

  it("test - Login failure", () => {
    cy.get("#email").type("malab84616@idurse.com");
    cy.get("#password").type("Pass@123");

    cy.contains("Log in").click();
    cy.wait(5000);
    cy.get("#login-form > div:nth-child(2) > span > b").should(
      "have.text",
      "Enter your Email address and password correct"
    );
  });

  it("test - Login success", () => {
    cy.get("#email").clear();
    cy.get("#email").type("malab84616@idurse.com");
    cy.get("#password").clear();
    cy.get("#password").type("Pass#1234");

    cy.contains("Log in").click();
    cy.wait(10000);
    cy.get("div[id='tabs-1'] h2").should(
      "have.text",
      "Broker Insurance WebPage"
    );
  });
});
