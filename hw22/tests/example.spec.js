// @ts-check
const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pageobjects/pageComponents/mainPage');
const { SearchComponents } = require('../pageobjects/pageComponents/searchComponents');
// const pw = require('playwright-core')
// const chai = require('chai')
// const expect = chai.expect
const { PlaywrightMocha } = require('playwright-mocha/dist/pm');
const assert = require('assert');

test.beforeEach(async ({ page }) => {
   await page.goto('https://playwright.dev/');
});
test.describe ('Test suite website playwright.dev ', function() {
    test('homepage should has a title', async ({ page }) => {
       await expect(page).toHaveTitle(/Fast and reliable end-to-end testing for modern web apps | Playwright/);
    });
    test('should be result of search /Creating locators/ - containing text /This method takes a selector/', async ({ page }) => {
      const mainPage = new MainPage(page);
      mainPage.inputSearch('Creating locators');
      await expect(mainPage.article).toContainText('This method takes a selector');
    });
      test('should be enable GitHub button on main page', async({ page }) => {
        const searchComponents = new SearchComponents(page);
      await expect(searchComponents.gitHubButton).toBeEnabled()
    });
    test('should be visible PlawrightHome button', async({ page }) => {
      const searchComponents = new SearchComponents(page);
      await expect(searchComponents.plawrightHomeButton).toBeVisible()
    });
    test('PlawrightHome button has class - navbar__brand', async({ page }) => {
      const searchComponents = new SearchComponents(page);
      await searchComponents.buttonCommunity.click();
      await expect(searchComponents.plawrightHomeButton).toHaveAttribute('class', 'navbar__brand');
    });
})