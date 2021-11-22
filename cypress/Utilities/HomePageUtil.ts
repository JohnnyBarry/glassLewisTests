const visitPage = (): Cypress.Chainable<Cypress.AUTWindow> => {
  return cy.visit(Cypress.env('home_url'));
};

const assertPageUrl = (): Cypress.Chainable<string> => {
  return cy.url().should('eq', Cypress.env('home_url'));
};

const assertPageTitle = (): Cypress.Chainable<string> => {
  return cy.title().should('eq', Cypress.env('home_page_title'));
};

export default { visitPage, assertPageUrl, assertPageTitle };
