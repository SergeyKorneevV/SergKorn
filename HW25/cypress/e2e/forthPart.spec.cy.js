const HomePage = require('../pageObjects/homePage');
describe('Part four of homework', () =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/example-4')
    })
    it('should be text - Selected Item:Option One - after mouseover item#1', () =>{
        HomePage.mouseOverTheItemAndCheck(0, 'Option One');
    })
    it('should be text - Selected Item:Option Two - after mouseover item#2', () =>{
        HomePage.mouseOverTheItemAndCheck(1, 'Option Two');
    })
    it('should be text - Selected Item:Option Three - after mouseover item#3', () =>{
        HomePage.mouseOverTheItemAndCheck(2, 'Option Three');
    })
})