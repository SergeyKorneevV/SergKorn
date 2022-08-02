const { MainPage } = require('../pageobjects/MainPage');
const mainPage = new MainPage();
const { SearchComponent } = require('../pageobjects/pageComponents/searchComponents');
const searchComponent = new SearchComponent();
describe ('Test suite website webdriver.io ', function() {
    it('should be a title with name "WebdriverIO · Next-gen browser and mobile automation..."', async() => {
        mainPage.navigate('https://webdriver.io/');
        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    })
    it('should be a result of search with phrase "saveScreenshot"', async() => {
        mainPage.navigate('https://webdriver.io/');
        mainPage.inputSearch('saveScreenshot') 
        await expect(mainPage.article).toHaveTextContaining('Save a screenshot of the current')
        })
    it('should be clickable logo button', async() => {
        mainPage.navigate('https://webdriver.io/');
        await expect(mainPage.logoButton).toBeClickable()
        })
    it('should be displaed Blog button below the main page"', async() => {
        mainPage.navigate('https://webdriver.io/');
        searchComponent.scrollToButtonBlog();
        await expect(searchComponent.buttonBlog).toBeDisplayed()
        })
    it('should be exist footer Blog button on the Api Button click', async() => {
        mainPage.navigate('https://webdriver.io/');
        searchComponent.buttonApi.click();
        await expect(searchComponent.buttonBlog).toExist()
        })
})