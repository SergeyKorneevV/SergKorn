const cartPage = require('../pageObjects/cartPage');
describe('Tests cart page', () =>{
        beforeEach(() => {
        cy.visit('https://www.amd.by/')
        cy.viewport(1920, 1080)
    })
    it('should item add to cart', () =>{
        cartPage.addToCart()
        cartPage.cartResultText().should('have.text', ' Товар Офисная бумага SvetoCopy A4 (80 г/м2) добавлен в вашу корзину! ×')
    })
    it('should button CartButton change css', () =>{
        cartPage.addToCart()
        cartPage.inCartButtonDisabled().should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    })
    it('should button CartButton change css', () =>{
        cartPage.inTheCart()
        cartPage.inCartButtonDisabled().should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    })
    it('should increase 1 item', () =>{
        cartPage.increasePlusItem()
        cartPage.howManyItemsField().should('have.value', '2')
    })
    it('should dicrease 1 item', () =>{
        cartPage.increasePlusItem()
        cartPage.minusButton().click()
        cartPage.howManyItemsField().should('have.value', '1')
    })
    it('should increase 10 item via field howManyItemsField', () =>{
        cartPage.increaseItemViaInputField()
        cartPage.howManyItemsField().should('have.value', '10')
    })
    it('should delete item', () =>{
        cartPage.deleteItem()
        cartPage.emptyCartText().should('have.text', 'Ваша корзина пуста!')
    })
    it('should be confirmated item', () =>{
        cartPage.confirmateItem()
        cartPage.resultConfirm().should('have.text', 'Оформление заказа')
    })
})
