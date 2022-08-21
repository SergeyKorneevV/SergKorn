const flowPage = require('../pageObjects/flowPage');
const pageComponents = require('../pageObjects/pageComponents');
describe('Tests main flow', () =>{
        beforeEach(() => {
        cy.visit('https://www.amd.by/')
        cy.viewport(1920, 1080)
    })
    it('should not be disabled knowAboutLowPriceButton', () =>{
        pageComponents.findProduct('Офисная бумага SvetoCopy')
        flowPage.firstSearchProduct().click()
        flowPage.knowAboutLowPriceButton().should('not.be.disabled')
    })
    it('should not to be disabled inCartButton', () =>{
        pageComponents.findProduct('Офисная бумага SvetoCopy')
        flowPage.firstSearchProduct().click()
        flowPage.inCartButton().should('not.be.disabled')
    })
    it('should product add to compare', () =>{
        flowPage.addToCompare()
        flowPage.resultCompareText().should('have.text', ' Товар Офисная бумага SvetoCopy A4 (80 г/м2) успешно добавлен в список сравнения! ×')
    })
    it('should have describe text Общая информация', () =>{
        flowPage.resultDescription()
        flowPage.resultDescribeText().should('have.text', 'Общая информация')
    })
    it('should have describe text Цвет', () =>{
        flowPage.resultProperties()
        flowPage.resultPropertiesText().should('have.text', 'Цвет')
    })
    it('should have delivery text', () =>{
        flowPage.resultDeliveryText()
        flowPage.resultDelivery().should('have.text', 'Город доставки:')
    })
    it('should have delivery town Гомельская обл., Гомельский р-н, Гомель', () =>{
        flowPage.changeCityDelivery('Гомель')
        flowPage.inputCityFeild().should('have.value', 'Гомельская обл., Гомельский р-н, Гомель')
    })
})