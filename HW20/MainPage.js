const { BasePage } = require('./BasePage');

class MainPage extends BasePage {
    get searchField() {
        return $('.DocSearch-Button-Placeholder')
        }
    get searchFieldWindow() {
        return $('#docsearch-input')
    }
    get findLink() {
        return $('//*[@class="DocSearch-Hit-content-wrapper"] //*[contains(text(), "saveScreenshot")]')
    }
    get logoButton() {
        return $('[rel="noopener noreferrer"] [class*="theme"]')
    }
    get article() {
        return $('//article')
    }
    async inputSearch (value) {
        this.searchField.click()
        this.searchFieldWindow.waitForClickable();
        this.searchFieldWindow.setValue(value)
        this.findLink.click()
    }
    searchFieldDisplay () {
        this.jogoButton.waitForClickable();
    }
}
module.exports = { MainPage };