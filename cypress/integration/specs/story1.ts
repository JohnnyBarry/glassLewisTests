import homePageConfig from '../../pageConfigs/homePageConfig';

describe('Story 1: Filter Meetings By Country', () => {
  beforeEach(() => {
    cy.visit(homePageConfig.home_url);
  });

  it(`Browser url is set to ${homePageConfig.home_url}`, () => {
    cy.url().should(
      'eq',
      homePageConfig.home_url
    );
  });

  it(`Page title is ${homePageConfig.title}`, () => {
    cy.title().should('eq', homePageConfig.title);
  });

  it('The Country Filter Element Is Visible', () => {
    cy.get('#filter-country').should('be.visible');
  });

  it('The Country Filter Has A Belgium Option', () => {
    cy.get('#Belgium-cb-label-CountryFilter');
  });

  it('When the country is filtered to Belgium then all meetings are associated with Belgium', () => {
    cy.get('#Belgium-cb-label-CountryFilter').click();

    cy.get('#filter-country #btn-update').click();

    cy.get('table[role=grid] tbody>tr>td:last-of-type')
      .should('contain', 'Belgium')
      .each(($td, index, $lis) => {
        expect($td.text()).to.contain('Belgium');
      });
  });

});
