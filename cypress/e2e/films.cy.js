
describe('Films app', () => {

  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })

  it('Visitando pagina peliculas y una pelicula', () => {
    cy.contains('Peliculas').click()
    cy.get('[data-test-id="pelicula2"]').click()
  })

  it('Visitando pagina series y una serie', () => {
    cy.contains('Series').click()
    cy.get('[data-test-id="serie2"]').click()
  }) 

  it('Probando paginacion', () => {
    cy.contains('Series').click()
    cy.get('[data-test-id="paginacion"]').click()
  }) 

})