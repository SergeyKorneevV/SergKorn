require('chromedriver');
const { Builder, By, Key } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').setChromeOptions('fullscreen').build();
const { expect} = require('chai');
const { hasUncaughtExceptionCaptureCallback } = require('process');
describe(`Test some functionality website chromedriver.chromium.org`, function() {
    it(`Homework test new test`, async () => {
        await driver.manage().window().maximize();
        await driver.get('https://chromedriver.chromium.org/home');
        const titleChromeDriver = await driver.getTitle()
        console.log('The main title is', titleChromeDriver)
    expect(titleChromeDriver).contain('ChromeDriver');
        const ButtonChromeExtensions = await driver.findElement(By.xpath('//a[@class="aJHbb dk90Ob jgXgSe HlqNPb"] [contains(text(),"Chrome Extensions")]'))
        await driver.actions().click(ButtonChromeExtensions).perform();
        const textChromeExtensions = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span'));
        await driver.executeScript('arguments[0].style.backgroundColor="yellow"', textChromeExtensions);
        await driver.sleep(2000);
        const findTextChromeExtensions = await driver.getTitle();
        console.log('New title is', findTextChromeExtensions)
    expect(findTextChromeExtensions).contain('Chrome Extensions');
        const buttonSearchFind = await driver.findElement(By.xpath('//*[@class="U26fgb mUbCce fKz7Od iWs3gf Wdnjke M9Bg4d"]'));
        await driver.actions().click(buttonSearchFind).perform();
        await driver.sleep(2000);
        const fieldSearch = await driver.findElement(By.xpath('//*[@class="whsOnd zHQkBf"]'));
        await fieldSearch.sendKeys('driver');
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.sleep(2000);
        const findFirstLinkDriver = await driver.findElement(By.xpath('//div[@class="gtazFe"][1]//*[contains(text(), "driver")]')).getText();
        console.log(findFirstLinkDriver);
    expect(findFirstLinkDriver).contain('driver');
        await driver.close();
        })
    })
