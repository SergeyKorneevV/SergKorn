class pageComponents {
    constructor() {
        this.fieldSearch = () => cy.get('.col-md-9 > #search > #searchform > #inputString')
        this.fieldSearchInput = () => cy.get('#q')
    }
    findProduct(nameItemProduct) {
        this.fieldSearch().click()
        this.fieldSearchInput().type(nameItemProduct)
    }
    clickContacts() {
        this.hideContactsButton().click()
        this.downContactsButton().click()
    }
}
module.exports = new pageComponents();