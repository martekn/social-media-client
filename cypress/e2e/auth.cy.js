describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("./");
    cy.wait(500);
  });

  it("allows a registered user with valid credentials to log in", () => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.wait(500);
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).to.exist;
      expect(typeof token).to.equal("string");
    });
  });

  it("disallows a user to log in with invalid credentials and is shown an error", () => {
    let alertShown = false;
    cy.on("window:alert", (message) => {
      alertShown = true;
      expect(typeof message).to.equal("string");
    });
    cy.login("InvalidEmail@noroff.no", "password");
    cy.wait(1000).then(() => {
      if (!alertShown) {
        throw new Error(
          "Alert did not show up with an error on invalid credentials",
        );
      }
    });
  });

  it("allows a registered user to log out", () => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.get("button[data-auth='logout']").click();
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).to.not.exist;
    });
  });
});
