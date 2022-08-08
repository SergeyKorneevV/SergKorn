const { expect } = require('@playwright/test');
exports.MainPage = class MainPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.searchField = page.locator('.DocSearch-Button-Placeholder');
      this.searchFieldWindow = page.locator('#docsearch-input');
      this.findLink = page.locator('//*[@class="DocSearch-Hit-title"] //*[contains(text(), "Creating")]');
      this.article = page.locator('//article');
    }
    async inputSearch (value) {
          await this.searchField.click();
          await this.searchFieldWindow.fill(value);
          await this.page.waitForSelector('//*[@class="DocSearch-Hit-title"] //*[contains(text(), "Creating")]');
          await this.findLink.click();
        }
}