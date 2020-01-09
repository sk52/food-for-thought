describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('/');
      cy.get('.title').should('contain', 'Welcome to the product list');
    })
})