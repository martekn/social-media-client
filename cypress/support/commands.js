// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => {
  cy.get('#registerForm button.btn-outline-success[data-auth="login"]')
    .should("be.visible")
    .click();
  cy.wait(500);
  cy.get("#loginEmail").should("be.visible").type(email);
  cy.get("#loginPassword").should("be.visible").type(password);
  cy.get("#loginForm button[type='submit']").click();
  cy.wait(1000);
});
