describe('Part one of homework', () =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/example-4')
    })
    it('should be highlighted after Click', () =>{
        cy.get('[data-cy="box-1-items-list"] li:first-of-type')
        .click()
        .should('have.css', 'background-color', 'rgb(221, 221, 221)')
    })
    it('should be highlighted after doubleClick', () =>{
        cy.get('[data-cy="box-1-items-list"] li:nth-of-type(2)')
        .dblclick()
        .should('have.css', 'background-color', 'rgb(221, 221, 221)')
    })
    it('shouls contain text - Option Three - afer doubleClick', () =>{
        cy.get('[data-cy="box-1-items-list"] li:nth-of-type(3)')
        .dblclick()
        cy.get('[data-cy="box-1-selected-name')
        .invoke('text')
        .should('contain', 'Option Three')
    })
})