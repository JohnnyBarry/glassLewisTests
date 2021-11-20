import homePageUtil from '../../Utilities/HomePageUtil';

describe('Story 1: Filter Meetings By Country', () => {
  beforeEach(() => {
    homePageUtil.visitPage();
  });

  it(`The browser url is set to ${Cypress.env('home_url')}`, () => {
    homePageUtil.assertPageUrl();
    homePageUtil.assertPageTitle();
  });

  it('The Country Filter Element Is Visible', () => {
    cy.get('#filter-country').should('be.visible');
  });

  it('The Country Filter Has A Belgium Option', () => {
    cy.get('#Belgium-cb-label-CountryFilter').should('be.visible');
  });

  it('When the country is filtered to Belgium then all meetings are associated with Belgium', () => {
    cy.get('#Belgium-cb-label-CountryFilter').click();
    cy.get('#Belgium-cb-CountryFilter').should('be.checked');

    cy.get('#filter-country #btn-update').click();

    cy.get('table[role=grid] tbody>tr>td:last-of-type')
      .should('contain', 'Belgium')
      .each(($td, index, $lis) => {
        expect($td.text()).to.contain('Belgium');
      });
  });
});
