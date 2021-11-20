const visitPage = () => {
    cy.visit(Cypress.env('home_url'));
  };

const assertPageUrl = () => {
    cy.url().should('eq', Cypress.env('home_url'));
  };

const assertPageTitle = () => {
    cy.title().should('eq', Cypress.env('home_page_title'));
  };

export default {visitPage, assertPageUrl, assertPageTitle}
