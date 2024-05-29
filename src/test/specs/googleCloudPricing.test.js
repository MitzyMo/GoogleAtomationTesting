const Main = require("../po/pages/main.page.js");
const SearchPage = require("../po/pages/search.page.js");
const CalculatorPage = require("../po/pages/calculator.page.js");
const ComputeEngineFormPage = require("../po/pages/computeEngineForm.page.js");

describe("Google Cloud Platform Pricing Calculator Test Suite", () => {
  it("Open", async () => {
    await Main.open();
    await Main.searchForCalculator();
  });

  it("Search Result", async () => {
    await SearchPage.clickCalculatorLink();
  });

  it("Calculate page", async () => {
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

  it("View Price and clickshare", async () => {
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
      "n1-standard-8, vCPUs: 8, RAM: 30 GB"
    );
    await ComputeEngineFormPage.verifySummaryDetails(
      "GPU Model",
      "NVIDIA V100"
    );
    await ComputeEngineFormPage.verifySummaryDetails("Number of GPUs", "1");
    await ComputeEngineFormPage.verifySummaryDetails("Local SSD", "2x375 GB");
    await ComputeEngineFormPage.verifySummaryDetails(
      "Number of Instances",
      "4"
    );
    await ComputeEngineFormPage.verifySummaryDetails(
      "Operating System / Software",
      "Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)"
    );
    await ComputeEngineFormPage.verifySummaryDetails(
      "Provisioning Model",
      "Regular"
    );
    await ComputeEngineFormPage.verifySummaryDetails("Add GPUs", "true");
    await ComputeEngineFormPage.verifySummaryDetails(
      "Region",
      "Oregon (us-west1)"
    );
    await ComputeEngineFormPage.verifySummaryDetails(
      "Committed use discount options",
      "1 year"
    );
  });
});
