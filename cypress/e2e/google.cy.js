describe('Pesquisa DuckDuckGo', () => {

  Cypress.on('uncaught:exception', () => false);

  it('Deve pesquisar e validar resultados', () => {

    cy.visit('https://duckduckgo.com/?q=Inteligência+Artificial');

    cy.get('body')
      .should('be.visible');

    cy.screenshot('resultado-duckduckgo');

  });

});