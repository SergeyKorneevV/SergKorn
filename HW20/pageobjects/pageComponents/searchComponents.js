const { BasePage } = require('../BasePage');

class SearchComponent extends BasePage {
    get buttonBlog() {
        return $('//*[@class="footer__link-item"] [@href="/blog"]')
        }
    async scrollToButtonBlog() {
        this.buttonBlog.waitForClickable();
        this.buttonBlog.scrollIntoView();
        }
    get buttonApi() {
        return $('//*[@class="navbar__item navbar__link"] [@href="/docs/api"]')
    }
}
module.exports = { SearchComponent };