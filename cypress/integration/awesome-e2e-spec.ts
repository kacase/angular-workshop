

describe('test landing page', () => {
  it('if "Deloitte Cocktails" is at landing page', () => {
    cy.visit('/');
    cy.contains('Deloitte Cocktails');
  });

  it('if search function works for caipirinha', () => {
    cy.visit('/');
    cy.get('[data-cy=search-field]').type('Caipirinha');
    cy.get('[data-cy=search-field]').type('{enter}'); // press enter
    cy.wait(2000);
    cy.get('[data-cy=detail-button]').first().click();
    cy.get('.ingredient-list')
      .should('contain', '2 Sugar')
      .should('contain', '1 Lime')
      .should('contain', '212 Cachaca');
  });
});

