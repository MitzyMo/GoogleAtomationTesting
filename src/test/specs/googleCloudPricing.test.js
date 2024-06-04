const MainPage = require("../pageObjects/pages/main.page.js");
const SearchPage = require("../pageObjects/pages/search.page.js");
const CalculatorPage = require("../pageObjects/pages/calculator.page.js");
const ComputeEngineFormPage = require("../pageObjects/pages/computeEngineForm.page.js");
const { addAttachment } = require("@wdio/allure-reporter");
const fs = require('fs');
const path = require('path');

const testDataPath = path.resolve(__dirname, '../../data/testData.json');
let testData = JSON.parse(fs.readFileSync(testDataPath, 'utf8'));

//Smoke Testing
/* describe("Google Cloud Platform Pricing Calculator", () => {
  describe("Verify that the search engine performs the query by varying the original text", () => {
    // Test for the original keyword
    it("Search with original keyword", async () => {
      await MainPage.open();
      await MainPage.searchForCalculator(testData.testData.calculatorSearchKeyword);
      await SearchPage.clickCalculatorLink();
    });

    // Tests for partial matches
    testData.testData.partialMatches.forEach((keyword) => {
      it(`Search with partial match: ${keyword}`, async () => {
        await MainPage.open();
        await MainPage.searchForCalculator(keyword);
        await SearchPage.clickCalculatorLink();
      });
    });

    // Tests for exact matches
    testData.testData.exactMatches.forEach((keyword) => {
      it(`Search with exact match: ${keyword}`, async () => {
        await MainPage.open();
        await MainPage.searchForCalculator(keyword);
        await SearchPage.clickCalculatorLink();
      });
    });
  });
  //Screenshots
afterEach(async function () {
  if (this.currentTest.state === "failed") {
    console.log(this.currentTest.state);
    // Generate a unique filename with date and time
    const fileName = `00.screenshot_${new Date().toISOString()}.png`;
    // Take a screenshot and save it with the filename
    await browser.saveScreenshot(
      `./src/test/specs/Screenshots/${fileName}`
    );
    // Attach the screenshot to the Allure report
    await addAttachment(
      fileName,
      await browser.takeScreenshot(),
      "image/png"
    );
  }
});
});
 */


// Happy Path
describe("Google Cloud Platform Pricing Calculator", () => {
  describe("View Compute Engine Product Pricing", () => {
    it("Open", async () => {
      await MainPage.open();
      await MainPage.searchForCalculator(testData.testData.calculatorSearchKeyword);
    });

    it("Search Result", async () => {
      await SearchPage.clickCalculatorLink();
    });

    it("Calculate page", async () => {
      await
      await CalculatorPage.clickAddEstimate();
      await CalculatorPage.selectComputeEngine();
    });

    it("Fill form", async () => {
      await ComputeEngineFormPage.setInstances();
      await ComputeEngineFormPage.selectOperatingSystem();
      await ComputeEngineFormPage.selectProvisioningModel();
      await ComputeEngineFormPage.selectMachineFamily();
      await ComputeEngineFormPage.selectSeries();
      await ComputeEngineFormPage.selectMachineType();
      await ComputeEngineFormPage.addGPUs();
      await ComputeEngineFormPage.selectLocalSSD();
      await ComputeEngineFormPage.selectRegion();
      await ComputeEngineFormPage.selectCommittedUsage();
      await browser.pause(3000);
    });

    it("View Price and click share", async () => {
      const estimatedCost = await ComputeEngineFormPage.getEstimatedCostText();
      console.log("Estimated Cost:", estimatedCost);
      console.log("Share Estimate Dialog should be open now");
    });

    it("Review Total estimated cost and go to Summary", async () => {
      await ComputeEngineFormPage.shareEstimate();
      await ComputeEngineFormPage.clickOpenEstimateSummary();
      await ComputeEngineFormPage.getTotalEstimatedCostText();
      await ComputeEngineFormPage.switchToEstimateSummary();
    });

    it("Verify data new screen", async () => {
      await ComputeEngineFormPage.verifySummaryDetails(
        "Service type",
        "Instances"
      );
      await ComputeEngineFormPage.verifySummaryDetails(
        "Machine type",
        testData.expectedMachineType
      );
      await ComputeEngineFormPage.verifySummaryDetails(
        "GPU Model",
        testData.expectedGPUModel
      );
      await ComputeEngineFormPage.verifySummaryDetails(
        "Number of GPUs",
        testData.expectedNumberOfGPUs
      );
      await ComputeEngineFormPage.verifySummaryDetails(
        "Local SSD",
        testData.expectedLocalSSD
      );
      await ComputeEngineFormPage.verifySummaryDetails(
        "Number of Instances",
        testData.expectedNumberOfInstances
      );
      await ComputeEngineFormPage.verifySummaryDetails(
        "Operating System / Software",
        testData.expectedOperatingSystem
      );
      await ComputeEngineFormPage.verifySummaryDetails(
        "Provisioning Model",
        testData.expectedProvisioningModel
      );
      await ComputeEngineFormPage.verifySummaryDetails(
        "Region",
        testData.expectedRegion
      );
      await ComputeEngineFormPage.verifySummaryDetails(
        "Committed use discount options",
        testData.expectedCommittedUsage
      );
    });
  });
  //Screenshots
afterEach(async function () {
  if (this.currentTest.state === "failed") {
    console.log(this.currentTest.state);
    // Generate a unique filename with date and time
    const fileName = `00.screenshot_${new Date().toISOString()}.png`;
    // Take a screenshot and save it with the filename
    await browser.saveScreenshot(
      `./src/test/specs/Screenshots/${fileName}`
    );
    // Attach the screenshot to the Allure report
    await addAttachment(
      fileName,
      await browser.takeScreenshot(),
      "image/png"
    );
  }
});
});
