const ComputeEngineFormPage = require("../../pageObjects/pages/computeEngineForm.page.js");
const { addAttachment } = require("@wdio/allure-reporter");
const dotenv = require('dotenv');
const path = require('path');

// Load environment-specific .env file
dotenv.config({ path: `.env.${process.env.TEST_ENV}` });

describe("Validate price across all total elements", () => {
    // Before each test, navigate to the Google Cloud pricing calculator page
    beforeEach(async () => {
        await browser.url(process.env.CALCULATOR_URL);
    });

    const priceRegex = /^\$\d{1,3}(,\d{3})*(\.\d{2})?( \/ month)?$/;

    const normalizePrice = (price) => {
        return price.replace(" / month", "");
    };

    const validatePrice = async (element, expectedPrice = null) => {
        const price = await element.getText();
        const normalizedPrice = normalizePrice(price);
        console.log(`${element.selector}:`, normalizedPrice);
        expect(normalizedPrice).toMatch(priceRegex);
        if (expectedPrice !== null) {
            const normalizedExpectedPrice = normalizePrice(expectedPrice);
            expect(normalizedPrice).toBe(normalizedExpectedPrice);
        }
        return normalizedPrice;
    };

    it("should validate that the price is consistent across all elements", async () => {
        const topEstimatedPriceElement = await $('//span[@class="MyvX5d D0aEmf"]');
        const computeEstimatedPriceElement = await $(
            '//label[@class="RI8Tpc ZF0dQe D0aEmf"]'
        );
        const instanceEstimatedPriceElement = await $(
            '//div[@class="SeJRAd ZF0dQe D0aEmf"]'
        );

        const estimatedCost = await ComputeEngineFormPage.getEstimatedCostText();

        const topEstimatedPrice = await validatePrice(topEstimatedPriceElement);
        const computeEstimatedPrice = await validatePrice(
            computeEstimatedPriceElement,
            topEstimatedPrice
        );
        const instanceEstimatedPrice = await validatePrice(
            instanceEstimatedPriceElement,
            topEstimatedPrice
        );
        await validatePrice({ getText: () => estimatedCost }, topEstimatedPrice);

        await ComputeEngineFormPage.shareEstimate();
        const totalEstimatedCostText = await ComputeEngineFormPage.getTotalEstimatedCostText();
        await validatePrice({ getText: () => totalEstimatedCostText }, topEstimatedPrice);

        await ComputeEngineFormPage.clickOpenEstimateSummary();
        await ComputeEngineFormPage.switchToEstimateSummary();

        const topLeftEstimatedPriceElement = await $(
            '//h4[@class="n8xu5 Nh2Phe D0aEmf"]'
        );
        const totalEstimatedPriceElement = await $(
            '//h6[@class="SeJRAd ZF0dQe D0aEmf"]'
        );

        await validatePrice(topLeftEstimatedPriceElement, totalEstimatedCostText);
        await validatePrice(totalEstimatedPriceElement, totalEstimatedCostText);
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            console.log(this.currentTest.state);
            const fileName = `00.screenshot_${new Date().toISOString()}.png`;
            await browser.saveScreenshot(`./src/test/specs/Screenshots/${fileName}`);
            await addAttachment(
                fileName,
                await browser.takeScreenshot(),
                "image/png"
            );
        }
    });
});
