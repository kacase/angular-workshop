it('loads examples', () => {
  cy.visit('/');
  cy.contains('Cocktail');
});
