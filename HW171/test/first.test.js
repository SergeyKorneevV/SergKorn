require('chromedriver');
const { Builder, By, Key } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').setChromeOptions('fullscreen').build();
describe(`Test some functionality website chromedriver.chromium.org site`, function() {
    it(`Homework tast`, async () => {
await driver.manage().window().maximize();
await driver.get('https://chromedriver.chromium.org/home');
const findTextChrDr = await driver.findElement(By.xpath('//*[@class=" Rn3Z1b"]'))
const ButtonChrExtensions = await driver.findElement(By.xpath('//a[@class="aJHbb dk90Ob jgXgSe HlqNPb"] [contains(text(),"Chrome Extensions")]'))
await driver.actions().click(ButtonChrExtensions).perform();
const textChromeExtensions = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span'));
await driver.executeScript('arguments[0].style.backgroundColor="yellow"', textChromeExtensions);
const findTextChromeExtensions = await driver.findElement(By.xpath('//*[@class=" Rn3Z1b"] [contains(text(),"Chrome Extensions")]'))
const buttonSearchFind = await driver.findElement(By.xpath('//*[@class="U26fgb mUbCce fKz7Od iWs3gf Wdnjke M9Bg4d"]'));
await driver.actions().click(buttonSearchFind).perform();
await driver.sleep(2000);
const fieldSearch = await driver.findElement(By.xpath('//*[@class="whsOnd zHQkBf"]'));
await fieldSearch.sendKeys('Driver');
await driver.actions().sendKeys(Key.ENTER).perform();
const findFirstLinkDrivers = await driver.findElement(By.css('#yDmH0d > div:nth-child(1)'))
await driver.sleep(4000);
await driver.close();
})
})
