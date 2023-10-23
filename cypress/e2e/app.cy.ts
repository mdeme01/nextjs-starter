describe('App', () => {
  it('the app should start', () => {
    cy.visit('/');
    cy.get('h1').contains('Next.js starter');
  });
});
