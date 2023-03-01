describe("Insurance Broker System Application spec", () => {
  beforeEach("before test", () => {
    cy.visit("https://demo.guru99.com/insurance/v1/index.php");
    cy.wait(6000);
  });

  it("test - Login failure", () => {
    cy.get("#email").type("malab84616@idurse.com");
    cy.get("#password").type("Pass@123");

    cy.contains("Log in").click();
    cy.on("uncaught:exception", (e) => {
      if (e.message.includes("validateLogin is not defined")) {
        return false;
      }
      // on any other error message the test fails
    });
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

    cy.get('input[value="Log in"]').should("be.enabled").click();
    cy.on("uncaught:exception", (e) => {
      if (e.message.includes("validateLogin is not defined")) {
        return false;
      }
      // on any other error message the test fails
    });
    cy.wait(5000);
    cy.url().should("include", "/insurance/v1/header.php");
    cy.get("div[id='tabs-1'] h2").should(
      "have.text",
      "Broker Insurance WebPage"
    );
  });

  it("test - Request Quotation", () => {
    cy.get("#email").clear();
    cy.get("#email").type("malab84616@idurse.com");
    cy.get("#password").clear();
    cy.get("#password").type("Pass#1234");

    cy.get('input[value="Log in"]').should("be.enabled").click();
    cy.on("uncaught:exception", (e) => {
      if (e.message.includes("validateLogin is not defined")) {
        return false;
      }
      // on any other error message the test fails
    });
    cy.wait(5000);
    cy.url().should("include", "/insurance/v1/header.php");
    cy.get('#ui-id-2').click();
    cy.get('div[id="tabs-2"] h2').should('have.text','Request a quotation');

    cy.get('#quotation_windscreenrepair_t').check('Yes');
    cy.get('#quotation_incidents').type('232');
    cy.get('#quotation_vehicle_attributes_registration').type('DYW-2424-32');
    cy.get('#quotation_vehicle_attributes_value').type('23432');
    cy.get('#quotation_vehicle_attributes_parkinglocation').select('Private Property');

    cy.get('input[value="Calculate Premium"]').click();
    cy.get('input[value="Save Quotation"]').click();
    cy.get('body > :nth-child(1)').should('have.text','You have saved this quotation!');

    cy.get('body > b:nth-child(3)').then((elem) =>{
      console.log(elem.text()); // 22931
    });
  });

  it("test - Retrieve Quotation", () => {
    cy.get("#email").clear();
    cy.get("#email").type("malab84616@idurse.com");
    cy.get("#password").clear();
    cy.get("#password").type("Pass#1234");

    cy.get('input[value="Log in"]').should("be.enabled").click();
    cy.on("uncaught:exception", (e) => {
      if (e.message.includes("validateLogin is not defined")) {
        return false;
      }
      // on any other error message the test fails
    });
    cy.wait(5000);
    cy.url().should("include", "/insurance/v1/header.php");
    cy.get('#ui-id-3').click();
    cy.get('input[placeholder="identification number"]').type('22931');
    cy.get('#getquote').click();
    cy.wait(2000);
    cy.url().should("include", "/insurance/v1/retrieve_quotation.php");
  });

  it("test - Edit Profile", () => {
    cy.get("#email").clear();
    cy.get("#email").type("malab84616@idurse.com");
    cy.get("#password").clear();
    cy.get("#password").type("Pass#1234");

    cy.get('input[value="Log in"]').should("be.enabled").click();
    cy.on("uncaught:exception", (e) => {
      if (e.message.includes("validateLogin is not defined")) {
        return false;
      }
      // on any other error message the test fails
    });
    cy.wait(5000);
    cy.url().should("include", "/insurance/v1/header.php");
    cy.get('#ui-id-4').click();
    cy.wait(2000);
    cy.get('#ui-id-5').click();

    cy.get('#user_surname').type('Doe');
    cy.get('#user_firstname').type('John');
    cy.get('#user_phone').type('645344535');
    cy.get('#user_address_attributes_street').type('ST435');
    cy.get('#user_address_attributes_city').type('Manches');
    cy.get('#user_address_attributes_county').type('BSTW');
    cy.get('#user_address_attributes_postcode').type('22443');
    cy.get('input[value="Update User"]').click();
    cy.on("uncaught:exception", (e) => {
      if (e.message.includes("Cannot read properties of undefined (reading 'address')")) {
        return false;
      }
      // on any other error message the test fails
    });
    cy.wait(4000);
  });


  after("after test -logout", () => {
    cy.get('input[value="Log out"]').click();
    cy.url().should("include", "/insurance/v1/index.php");
  });
});
