const MainPage = require("../../pageObjects/pages/main.page.js");
const SearchPage = require("../../pageObjects/pages/search.page.js");
const CalculatorPage = require("../../pageObjects/pages/calculator.page.js");
const ComputeEngineFormPage = require("../../pageObjects/pages/computeEngineForm.page.js");
const { addAttachment } = require("@wdio/allure-reporter");
const fs = require("fs");
const path = require("path");

const testDataPath = path.resolve(__dirname, `../../data/testData_${process.env.TEST_ENV}.json`);
let testData = JSON.parse(fs.readFileSync(testDataPath, 'utf8'));

// End-to-End (E2E)
describe("Compute Engine Estimate Price Flow", () => {
  it("Open Main Page and Search for Calculator", async () => {
    await MainPage.open();
    await MainPage.searchForCalculator(testData.calculatorSearchKeyword);
  });
  it("Click on Calculator Link from Search Results", async () => {
    await SearchPage.clickCalculatorLink();
  });
  it("Add Estimate and Select Compute Engine", async () => {
    await await CalculatorPage.clickAddEstimate();
    await CalculatorPage.selectComputeEngine();
  });
  it("Fill Compute Engine Form", async () => {
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
  it("View Estimated Cost and Click Share", async () => {
    const estimatedCost = await ComputeEngineFormPage.getEstimatedCostText();
    console.log("Estimated Cost:", estimatedCost);
    const regex = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/; // regex pattern for currency
    expect(estimatedCost).toMatch(regex);
  });
  it("Review Total estimated cost and go to Summary", async () => {
    await ComputeEngineFormPage.shareEstimate();
    const totalEstimatedCostText = await ComputeEngineFormPage.getTotalEstimatedCostText();
    console.log("Estimated Cost:", totalEstimatedCostText);
    const regex = /^\$\d{1,3}(,\d{3})*(\.\d{2})? \/ month$/;  // regex pattern for currency
    expect(totalEstimatedCostText).toMatch(regex);
    await ComputeEngineFormPage.clickOpenEstimateSummary();
    await ComputeEngineFormPage.switchToEstimateSummary();
  });
  it("Verify Summary Details", async () => {
    await console.log("Testing: ", testData.expectedMachineType);
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
  //Screenshots
  afterEach(async function () {
    if (this.currentTest.state === "failed") {
      console.log(this.currentTest.state);
      // Generate a unique filename with date and time
      const fileName = `00.screenshot_${new Date().toISOString()}.png`;
      // Take a screenshot and save it with the filename
      await browser.saveScreenshot(`./src/test/specs/Screenshots/${fileName}`);
      // Attach the screenshot to the Allure report
      await addAttachment(
        fileName,
        await browser.takeScreenshot(),
        "image/png"
      );
    }
  });
});