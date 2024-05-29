class CalculatorPage {
  get addEstimateButton() { return $('span.UywwFc-vQzf8d'); }
  get computeEngineOption() { return $(`//*[contains(@class, 'honxjf') and contains(text(), 'Compute Engine')]`); }

  async clickAddEstimate() {
    await this.addEstimateButton.waitForClickable();
    await this.addEstimateButton.click();
  }

  async selectComputeEngine() {
    await this.computeEngineOption.waitForClickable();
    await this.computeEngineOption.click();
  }
}

module.exports = new CalculatorPage();
