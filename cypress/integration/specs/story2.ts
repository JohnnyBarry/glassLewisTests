import homePageUtil from '../../Utilities/HomePageUtil';

describe('Story 2: Clicking a company name hyperlink leads to a vote card page for that company', () => {
  beforeEach(() => {
    homePageUtil.visitPage();
  });

  it(`The browser url is set to ${Cypress.env('home_url')}`, () => {
    homePageUtil.assertPageUrl();
  });

  it('A Link for the Activision Blizzard Inc company should be present', () => {
    cy.get('.k-link.k-pager-nav[title="Go to the next page"]').click();

    cy.get('table[role=grid] tbody>tr>td:first-of-type')
      .should('contain', 'Activision Blizzard Inc')
      .should('be.visible');
  });

  it('A Link for the Activision Blizzard Inc company should be present', () => {
    cy.get('.k-link.k-pager-nav[title="Go to the next page"]').click();

    cy.get('table[role=grid] tbody>tr>td:first-of-type>a').should(
      'contain',
      'Activision Blizzard Inc'
    );

    cy.get('table[role=grid] tbody>tr>td:first-of-type>a')
      .contains('Activision Blizzard Inc')
      .click();

    cy.get('h2#detail-issuer-name')
      .should('be.visible')
      .and('have.text', 'Activision Blizzard Inc');
  });
});
