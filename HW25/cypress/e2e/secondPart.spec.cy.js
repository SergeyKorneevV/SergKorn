const HomePage = require('../pageObjects/homePage');
describe('Part two of homework', () =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/example-4')
    })
    it('should be text - 3 checkboxes selected - after checkbox all item', () =>{
        HomePage.checkAllCheckboxesAndCheck()
    })
    it('should be text - 1 checkboxes selected - after checkbox item#3', () =>{
        HomePage.checkCheckboxByNumberAndCheck(2);
    })  
})