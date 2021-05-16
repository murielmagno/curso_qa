/// <reference types="cypress"/>

describe('Teste de site', ()=>{
    it('Visitar pagina web',()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
})