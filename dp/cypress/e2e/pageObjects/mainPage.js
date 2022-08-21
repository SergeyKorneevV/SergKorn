class mainPage {
    constructor() {
        this.mainFooter = () => cy.get('.container-footer')
        this.scrollUpButton = () => cy.get('.scroll-up > img')
        this.scrollDownButton = () => cy.get('.scroll-down > img')
        this.electronikaButton = () => cy.get('#Category-0')
        this.tvName = () => cy.get('#Section--86-Category-59 > :nth-child(1) > a > .text-block > .name')
        this.PhoneName = () => cy.get('#Section--86-Category-59 > :nth-child(2) > a > .text-block > .name')
        this.multAcusticName = () => cy.get('#Section--86-Category-59 > :nth-child(3) > a > .text-block > .name')
        this.salesButtonRight = () => cy.get('.slick-arrow-right > .fa')
        this.salesButtonLeft = () => cy.get('.slick-arrow-left > .fa')
        this.hideContactsButton = () => cy.get('.hide-phone-text') 
        this.downContactsButton = () => cy.get('.button-down-arrow > img')
        this.ourPhoneButton = () => cy.get('.container-active-mini-cart-top-block > :nth-child(1)')
    }
    clickOnElectronika() {
        this.electronikaButton().click()
    }
    clickContacts() {
        this.hideContactsButton().click()
        this.downContactsButton().click()
    }
}
module.exports = new mainPage();