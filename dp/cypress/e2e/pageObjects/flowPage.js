const pageComponents = require('../pageObjects/pageComponents');
class flowPage {
    constructor() {
        this.firstSearchProduct = () => cy.get(':nth-child(2) > .multi-content > a > span')
        this.knowAboutLowPriceButton = () => cy.get('#href_price')
        this.addToCompareButton = () => cy.contains("Добавить в сравнение")
        this.inCartButton = () => cy.get('#button-add-cart-product > .button-add-cart-product')
        this.describeButton = () => cy.get('#horizontalTab > :nth-child(1) > :nth-child(2) > .r-tabs-anchor')
        this.propertiesButton = () => cy.get('#horizontalTab > :nth-child(1) > .r-tabs-state-active > .r-tabs-anchor')
        this.resultPropertiesText = () => cy.get(':nth-child(5) > .characteristic-left')
        this.resultCompareText = () => cy.get('.alert')
        this.resultDescribeText = () => cy.get(':nth-child(1) > th')
        this.deliveryButton = () =>  cy.get(':nth-child(5) > .r-tabs-anchor')
        this.resultDelivery = () => cy.get('#product-delivery-block > .row > .col-sm-2')
        this.inputCityFeild = () => cy.get('.col-sm-3 > .form-control')
        this.chooseGomelDrop = () => cy.get('[data-value="17"] > a')
        this.resultAddToWishList = () => cy.get(':nth-child(1) > th')
    }
    addToCompare() {
        pageComponents.findProduct('Офисная бумага SvetoCopy')
        this.firstSearchProduct().click()
        this.addToCompareButton().click()
    }
    addToWishList() {
        pageComponents.findProduct('Офисная бумага SvetoCopy')
        this.firstSearchProduct().click()
        this.adToWishListButton().click()
    }
    resultDescription() {
        pageComponents.findProduct('Офисная бумага SvetoCopy')
        this.firstSearchProduct().click()
        this.describeButton().click()
    }
    resultProperties() {
        pageComponents.findProduct('Офисная бумага SvetoCopy')
        this.firstSearchProduct().click()
        this.propertiesButton().click()
    }
    resultDeliveryText() {
        pageComponents.findProduct('Офисная бумага SvetoCopy')
        this.firstSearchProduct().click()
        this.deliveryButton().click()
    }
    changeCityDelivery(city) {
        this.resultDeliveryText()
        this.inputCityFeild().clear()
        this.inputCityFeild().type(city)
        this.chooseGomelDrop().click()
    }
}
module.exports = new flowPage();