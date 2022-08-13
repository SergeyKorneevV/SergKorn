const HomePage = require('../pageObjects/homePage');
describe('Part three of homework', () =>{
    before(() => {
        cy.visit('http://localhost:3000/example-4')
    })
    it('should be text - Selected Item: Option Two - after selected item#2', () =>{
        HomePage.selectItemFromDropDownAndCheckIt('Option Two')
    })
    it('should be text - Selected Item: Option One - after selected item#1', () =>{
        HomePage.selectItemFromDropDownAndCheckIt('Option One')
    })
    it('should be text - Selected Item: Option Three - after selected item#3', () =>{
        HomePage.selectItemFromDropDownAndCheckIt('Option Three')
    })
})