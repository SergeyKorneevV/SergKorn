class loginPage {
    constructor() {
       this.authButton = () => cy.get('.header-top-auth-block > [href="https://www.amd.by/login/"]')
       this.textPreLoginPage = () => cy.get('strong')
       this.emailField = () => cy.get('#input-email')
       this.passwordField = ()=> cy.get('#input-password')
       this.inputButton = ()=> cy.get('form > .btn')
       this.textLoginPage = () => cy.get('#content > :nth-child(1)')
       this.invalidTextLogin = () => cy.get('.alert')
       this.forgetPasswordButton = () => cy.get('form > :nth-child(2) > a')
       this.forgetPasswordField = () => cy.get('h1')
       this.backButton = () => cy.get('.btn-default')
    }
    preLogin() {
        this.authButton().click()
    }
    logInInput (emailValue, passwordValue) {
        this.preLogin()
        this.emailField().type(emailValue)
        this.passwordField().type(passwordValue)
        // this.inputButton()
        this.inputButton().click()
    }
}
module.exports = new loginPage();