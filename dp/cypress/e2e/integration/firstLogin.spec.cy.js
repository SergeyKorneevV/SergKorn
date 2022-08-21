const loginPage = require('../pageObjects/loginPage');
describe('Tests Login', () =>{
    beforeEach(() => {
        cy.visit('https://www.amd.by/')
    })
    it('should open Pre login page', () =>{
        loginPage.preLogin()
        loginPage.textPreLoginPage().should('have.text', 'Вход в личный кабинет пользователя')    
    })
    it('should be Log in', () =>{
        loginPage.logInInput('levesal889@upshopt.com', '123456')
        loginPage.textLoginPage().should('have.text', 'Моя учетная запись')
    })
    it('should be error Login by email', () =>{
        loginPage.logInInput('levesal889@upshopt.co', '123456')
        loginPage.invalidTextLogin().should('have.text', 'Неправильно заполнены поля E-Mail и/или пароль!')
    })
    it('should be error Login by password', () =>{
        loginPage.logInInput('levesal889@upshopt.com', '12345')
        loginPage.invalidTextLogin().should('have.text', 'Неправильно заполнены поля E-Mail и/или пароль!')
    })
    it('should be notification Forgot password', () =>{
        loginPage.preLogin()
        loginPage.forgetPasswordButton().click()
        loginPage.forgetPasswordField().should('have.text', 'Забыли пароль?')
    })
    it('should be visible button Back on Login page', () =>{
        cy.visit('https://www.amd.by/')
        loginPage.preLogin()
        loginPage.forgetPasswordButton().click()
        loginPage.backButton().should('be.visible')
    })
})