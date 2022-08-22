const mainPage = require('../pageObjects/mainPage');
describe('Tests main page', () =>{
    beforeEach(() => {
        cy.visit('https://www.amd.by/')
    })
    it('should title contain text - Бытовая, компьютерная, цифровая -', () =>{
        cy.title().should('include', 'Бытовая, компьютерная, цифровая')
    })
    it('should be buttons up and down visible after scroll', () =>{
        cy.scrollTo(250, 2500)
        mainPage.scrollUpButton().should('be.visible')
        mainPage.scrollDownButton().should('be.visible')
    })
    it('should be buttons - Телевизоры, Мобильные телефоны, Мультимедиа акустика', () =>{
        mainPage.clickOnElectronika()
        mainPage.tvName().should('have.text', 'Телевизоры')
        mainPage.PhoneName().should('have.text', 'Мобильные телефоны')
        mainPage.multAcusticName().should('have.text', 'Мультимедиа акустика')
    })
    it('should salesButtonRight and salesButtonLeft not be disabled  ', () =>{
        mainPage.salesButtonRight().should('not.be.disabled')
        mainPage.salesButtonLeft().should('not.be.disabled')
    })
    it('should be ourPhoneButton not be disabled  ', () =>{
        mainPage.clickContacts()
        mainPage.ourPhoneButton().should('not.be.disabled')
    })
})
