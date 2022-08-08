const { expect } = require('@playwright/test');
exports.SearchComponents = class SearchComponents {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor (page) {
        this.page = page;
        this.gitHubButton = page.locator('.header-github-link');
        this.plawrightHomeButton = page.locator('.navbar__brand')
        this.buttonCommunity = page.locator('//*[@href="/community/welcome"]');
    }
}