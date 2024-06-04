class MainPage {
  get searchIcon() { return $('div.YSM5S[jsname="Ohx1pb"]'); }
  get searchInput() { return $('input[aria-label="Search"]'); }

  async open() {
    await browser.url('/');
  }

  async searchForCalculator() {
    await this.searchIcon.waitForClickable();
    await this.searchIcon.click();
    await this.searchInput.waitForDisplayed();
    await this.searchInput.setValue('Google Cloud Platform Pricing Calculator');
    await browser.keys('Enter');
  }
}

module.exports = new MainPage();
