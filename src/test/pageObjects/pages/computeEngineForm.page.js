class ComputeEngineFormPage {
  get instancesIncrementButton() { return $('div.QiFlid button[aria-label="Increment"]'); }
  get operatingSystemDropdown() { return $('//div[@role="combobox"][.//span[@class="VfPpkd-t08AT-Bz112c"] and .//span[@jscontroller="liGIGc" and text()="Operating System / Software"]]'); }
  get freeDebianOption() { return $('ul.VfPpkd-rymPhb > li[data-value="free-debian-centos-coreos-ubuntu-or-byol-bring-your-own-license"]'); }
  get provisioningModelRegular() { return $('//div[contains(@class, "e2WL2b MYT3K pV2hx oLWDHd") and .//label[@for="regular"]]'); }
  get machineFamilyDropdown() { return $('//div[@role="combobox"][.//span[@class="VfPpkd-t08AT-Bz112c"] and .//span[@jscontroller="liGIGc" and text()="Machine Family"]]'); }
  get generalPurposeOption() { return $('//li[@data-value="general-purpose"]'); }
  get seriesDropdown() { return $('//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Series"]]'); }
  get n1Option() { return $('//li[@data-value="n1"]'); }
  get machineTypeDropdown() { return $('//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Machine type"]]'); }
  get n1Standard8Option() { return $('//li[@data-value="n1-standard-8"]'); }
  get addGPUsButton() { return $('//button[@aria-label="Add GPUs"]'); }
  get gpuModelDropdown() { return $('//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="GPU Model"]]'); }
  get nvidiaTeslaV100Option() { return $('//li[@data-value="nvidia-tesla-v100"]'); }
  get numberOfGPUsDropdown() { return $('//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Number of GPUs"]]'); }
  get oneGPUOption() { return $('//li[@data-value="1"]'); }
  get localSSDDropdown() { return $('//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Local SSD"]]'); }
  get two375GBOption() { return $('//li[@data-value="2"][.//span[@jsname="K4r5Ff" and text()="2x375 GB"]]'); }
  get regionDropdown() { return $('//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Region"]]'); }
  get oregonOption() { return $('//li[@data-value="us-west1"]'); }
  get committedUsage1Year() { return $('//div[contains(@class, "e2WL2b MYT3K pV2hx oLWDHd") and .//label[@for="1-year"]]'); }
  get estimatedCostElement() { return $('//div[@class="PuMEh W42XEf"]'); }
  get shareEstimateButton() { return $('//button[@aria-label="Open Share Estimate dialog"]'); }
  get openEstimateSummary() { return $('//a[contains(text(),"Open estimate summary")]'); }
  get totalEstimatedCostElement() { return $('//span[contains(text(), "Total estimated cost")]'); }

  async setInstances() {
    for (let i = 0; i < 3; i++) {
      await this.instancesIncrementButton.waitForClickable();
      await this.instancesIncrementButton.click();
      await browser.pause(500);
    }
  }

  async selectOperatingSystem() {
    await this.operatingSystemDropdown.waitForClickable();
    await this.operatingSystemDropdown.click();
    await this.freeDebianOption.waitForClickable();
    await this.freeDebianOption.click();
  }

  async selectProvisioningModel() {
    await this.provisioningModelRegular.waitForClickable();
    await this.provisioningModelRegular.click();
  }

  async selectMachineFamily() {
    await this.machineFamilyDropdown.waitForClickable();
    await this.machineFamilyDropdown.click();
    await this.generalPurposeOption.waitForClickable();
    await this.generalPurposeOption.click();
  }

  async selectSeries() {
    await this.seriesDropdown.waitForClickable();
    await this.seriesDropdown.click();
    await this.n1Option.waitForClickable();
    await this.n1Option.click();
  }

  async selectMachineType() {
    await this.machineTypeDropdown.waitForClickable();
    await this.machineTypeDropdown.click();
    await this.n1Standard8Option.waitForClickable();
    await this.n1Standard8Option.click();
  }

  async addGPUs() {
    await this.addGPUsButton.waitForClickable();
    await this.addGPUsButton.click();
    await this.gpuModelDropdown.waitForClickable();
    await this.gpuModelDropdown.click();
    await this.nvidiaTeslaV100Option.waitForClickable();
    await this.nvidiaTeslaV100Option.click();
    await this.numberOfGPUsDropdown.waitForClickable();
    await this.numberOfGPUsDropdown.click();
    await this.oneGPUOption.waitForClickable();
    await this.oneGPUOption.click();
  }

  async selectLocalSSD() {
    await this.localSSDDropdown.waitForClickable();
    await this.localSSDDropdown.click();
    await this.two375GBOption.waitForClickable();
    await this.two375GBOption.click();
  }

  async selectRegion() {
    await this.regionDropdown.waitForClickable();
    await this.regionDropdown.click();
    await this.oregonOption.waitForClickable();
    await this.oregonOption.click();
  }

  async selectCommittedUsage() {
    await this.committedUsage1Year.waitForClickable();
    await this.committedUsage1Year.click();
  }

  async getEstimatedCostText() {
    await this.estimatedCostElement.waitForDisplayed();
    return await this.estimatedCostElement.getText();
  }

  async shareEstimate() {
    await this.shareEstimateButton.waitForDisplayed();
    await this.shareEstimateButton.waitForClickable();
    await this.shareEstimateButton.click();
  }

  async getTotalEstimatedCostText() {
    await this.totalEstimatedCostElement.waitForDisplayed();
    const totalEstimatedCostElement = await $('//span[contains(text(), "Total estimated cost")]');
    await totalEstimatedCostElement.waitForDisplayed({ timeout: 10000 });
    // Locate the total estimated cost parent element to extract the cost
    const totalEstimatedCostParentElement = await totalEstimatedCostElement.$("..");
    const costElement = await totalEstimatedCostParentElement.$(".gN5n4.MyvX5d.D0aEmf");
    const totalEstimatedCostText = await costElement.getText();
    // Validate the format "Total Estimated Cost ${amount} / month"
    const regex = /^\$[\d,]+\.\d{2} \/ month$/;
    expect(totalEstimatedCostText).toMatch(regex);
    return totalEstimatedCostText;
  }

  async clickOpenEstimateSummary() {
    await this.openEstimateSummary.waitForDisplayed({ timeout: 20000 });
    await this.openEstimateSummary.waitForClickable();
    await this.openEstimateSummary.click();
    console.log("Clicked Open Estimate Summary");
  }

  async switchToEstimateSummary() {
    await browser.pause(2000);
    const handles = await browser.getWindowHandles();
    if (handles.length > 1) {
      await browser.switchToWindow(handles[1]);
    } else {
      throw new Error("New window for the estimate summary did not open.");
    }
  }

  async verifySummaryDetails(selectedService, expectedValue) {
    let parentSpanXPath = `//span[contains(@class, "Z7Pe2d") and contains(@class, "g5Ano")][span[1][text()="${selectedService}"] and span[2][text()="${expectedValue}"]]`;
    let parentSpan = await $(parentSpanXPath);
    await expect(parentSpan).toBeDisplayed();
    let firstSpanText = await parentSpan.$('span:nth-child(1)').getText();
    let secondSpanText = await parentSpan.$('span:nth-child(2)').getText();
    await expect(firstSpanText).toEqual(selectedService);
    await expect(secondSpanText).toEqual(expectedValue);
  }
}

module.exports = new ComputeEngineFormPage();
