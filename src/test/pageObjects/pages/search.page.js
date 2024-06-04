class SearchPage {
  get calculatorLink() { return $('a[href="https://cloud.google.com/products/calculator"]'); }

  async clickCalculatorLink() {
    await this.calculatorLink.waitForClickable();
    await this.calculatorLink.click();
  }
}

module.exports = new SearchPage();