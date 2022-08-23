const pageComponents = require('../pageObjects/pageComponents');
const flowPage = require ('../pageObjects/flowPage')
class cartPage {
    constructor() {
        this.firstSearchProduct = () => cy.get(':nth-child(2) > .multi-content > a > span')
        this.cartResultText = () => cy.get('.alert')
        this.inCartButtonDisabled = () => cy.get('#button-add-cart-product > .btn')
        this.minusButton = () => cy.get('.input-group > :nth-child(1) > .btn')
        this.plusButton = () => cy.get('.input-group > :nth-child(3) > .btn')
        this.deleteButton = () => cy.get('.col-xs-2 > .btn')
        this.howManyItemsField = () => cy.get('.input-group > .form-control')
        this.emptyCartText = () => cy.get('.content')
        this.checkBoxAgreement = () => cy.get('#agreement')
        this.confitmButton = () => cy.get('#simplecheckout_button_confirm > span') 
        this.resultConfirm = () => cy.get('h1')
        this.cartButton = () => cy.get('.col-md-5 > [href="https://www.amd.by/simplecheckout/"] > .button-cart > img')
    }
    addToCart() {
        pageComponents.findProduct('Офисная бумага SvetoCopy')
        flowPage.firstSearchProduct().click()
        flowPage.inCartButton().click()  
    }
    inTheCart() {
        this.addToCart()
        this.inCartButtonDisabled().click()
    }
    increasePlusItem() {
        this.inTheCart()
        this.plusButton().click()
    }
    increaseItemViaInputField() {
        this.inTheCart()
        this.minusButton().click()
        this.howManyItemsField().clear().type('10{enter}')
    }
    deleteItem() {
        this.inTheCart()
        this.deleteButton().click()
    }
    confirmateItem() {
        this.inTheCart()
        loginPage.logInInput('levesal889@upshopt.com', '123456')
        this.cartButton().click()
        this.checkBoxAgreement().check()
        this.confitmButton().click()
    }
}
module.exports = new cartPage();