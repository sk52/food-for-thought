import ApiResponse from "./api_test_response.json";

describe('The Home Page', function() {
it('successfully loads', function() {
      cy.visit('/');
      cy.get('.home').should('contain', 'Food For Thought');
    });
});

describe('Search', function() {
  it('Can use submit button', function() {
    cy.server();
    cy.route({method: 'GET', url: 'http://localhost:3000/api/recipe/by-ingredients/beef', response: ApiResponse});
    cy.get('.input').type('beef');
    cy.get('.search-button').click();
    cy.get(':nth-child(7) > h1').should('contain', 'TEST DATA - Balsamic Roast Beef French Dip Sandwich');
  });
});