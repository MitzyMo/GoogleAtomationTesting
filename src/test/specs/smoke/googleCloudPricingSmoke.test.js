const MainPage = require("../../pageObjects/pages/main.page.js");
const SearchPage = require("../../pageObjects/pages/search.page.js");
const { addAttachment } = require("@wdio/allure-reporter");
const fs = require("fs");
const path = require("path");

const testDataPath = path.resolve(__dirname, `../../data/testData_${process.env.TEST_ENV}.json`);
console.log(testDataPath);
let testData = JSON.parse(fs.readFileSync(testDataPath, 'utf8'));

//Smoke Testing
describe("Verify that the search engine performs the query by varying the original text", () => {
  // Test for the original keyword
  it("Search with original keyword", async () => {
    await MainPage.open();
    await MainPage.searchForCalculator(testData.calculatorSearchKeyword);
    await SearchPage.clickCalculatorLink();
  });
  // Tests for partial matches
testData.partialMatches.forEach((keyword) => {
    it(`Search with partial match: ${keyword}`, async () => {
      await MainPage.open();
      await MainPage.searchForCalculator(keyword);
      await SearchPage.clickCalculatorLink();
    });
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