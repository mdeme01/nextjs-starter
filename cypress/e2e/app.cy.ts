describe('App', () => {
  it('the app should start', () => {
    // Start from the index page
    cy.visit('/');

    // The index page should contain a main with "Next.js starter"
    cy.get('main').contains('Next.js starter');
  });
});
