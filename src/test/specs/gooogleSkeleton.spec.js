describe("Google Cloud Platform Pricing Calculator Test Suite", () => {
  beforeEach(async () => {
    await browser.url("https://cloud.google.com/products/calculator/estimate-preview/45b1238f-7561-4680-ae7c-d4829031019a");
  });

  it('should evaluate the presence and values of key parameters', async () => {
    //TESTIING STRUCTURE: 
    let selectedService = "Service type";
    let expectedValue = "Instances";
    let parentSpanXPath = `//span[contains(@class, "Z7Pe2d") and contains(@class, "g5Ano")][span[1][text()="${selectedService}"] and span[2][text()="${expectedValue}"]]`;
    let parentSpan = await $(parentSpanXPath);
    // Verify that the element is displayed
    await expect(parentSpan).toBeDisplayed();
    // Optionally, verify the text values of the children spans
    let firstSpanText = await parentSpan.$('span:nth-child(1)').getText();
    let secondSpanText = await parentSpan.$('span:nth-child(2)').getText();
    await expect(firstSpanText).toEqual(selectedService);
    await expect(secondSpanText).toEqual(expectedValue);
    console.log('key: ',firstSpanText,', Value: ',secondSpanText);
    //-------
    // Locate and assert Number of Instances
    selectedService = "Number of Instances";
    expectedValue = "4";
    parentSpanXPath = `//span[contains(@class, "Z7Pe2d") and contains(@class, "g5Ano")][span[1][text()="${selectedService}"] and span[2][text()="${expectedValue}"]]`;
    parentSpan = await $(parentSpanXPath);
    await expect(parentSpan).toBeDisplayed();
    firstSpanText = await parentSpan.$('span:nth-child(1)').getText();
    secondSpanText = await parentSpan.$('span:nth-child(2)').getText();
    await expect(firstSpanText).toEqual(selectedService);
    await expect(secondSpanText).toEqual(expectedValue);
    console.log('key: ',firstSpanText,', Value: ',secondSpanText);
    //-------
    // Locate and assert Operating System / Software
    selectedService = "Operating System / Software";
    expectedValue = "Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)";
    parentSpanXPath = `//span[contains(@class, "Z7Pe2d") and contains(@class, "g5Ano")][span[1][text()="${selectedService}"] and span[2][text()="${expectedValue}"]]`;
    parentSpan = await $(parentSpanXPath);
    await expect(parentSpan).toBeDisplayed();
    firstSpanText = await parentSpan.$('span:nth-child(1)').getText();
    secondSpanText = await parentSpan.$('span:nth-child(2)').getText();
    await expect(firstSpanText).toEqual(selectedService);
    await expect(secondSpanText).toEqual(expectedValue);
    console.log('key: ',firstSpanText,', Value: ',secondSpanText);
    //-------
    // Locate and assert Provisioning model
    selectedService = "Provisioning Model";
    expectedValue = "Regular";
    parentSpanXPath = `//span[contains(@class, "Z7Pe2d") and contains(@class, "g5Ano")][span[1][text()="${selectedService}"] and span[2][text()="${expectedValue}"]]`;
    parentSpan = await $(parentSpanXPath);
    await expect(parentSpan).toBeDisplayed();
    firstSpanText = await parentSpan.$('span:nth-child(1)').getText();
    secondSpanText = await parentSpan.$('span:nth-child(2)').getText();
    await expect(firstSpanText).toEqual(selectedService);
    await expect(secondSpanText).toEqual(expectedValue);
    console.log('key: ',firstSpanText,', Value: ',secondSpanText);

    // Locate and assert Machine type
    selectedService = "Machine type";
    expectedValue = "n1-standard-8, vCPUs: 8, RAM: 30 GB";
    parentSpanXPath = `//span[contains(@class, "Z7Pe2d") and contains(@class, "g5Ano")][span[1][text()="${selectedService}"] and span[2][text()="${expectedValue}"]]`;
    parentSpan = await $(parentSpanXPath);
    await expect(parentSpan).toBeDisplayed();
    firstSpanText = await parentSpan.$('span:nth-child(1)').getText();
    secondSpanText = await parentSpan.$('span:nth-child(2)').getText();
    await expect(firstSpanText).toEqual(selectedService);
    await expect(secondSpanText).toEqual(expectedValue);
    console.log('key: ',firstSpanText,', Value: ',secondSpanText);


    // Locate and assert Add GPUs
    selectedService = "Add GPUs";
    expectedValue = "true";
    parentSpanXPath = `//span[contains(@class, "Z7Pe2d") and contains(@class, "g5Ano")][span[1][text()="${selectedService}"] and span[2][text()="${expectedValue}"]]`;
    parentSpan = await $(parentSpanXPath);
    await expect(parentSpan).toBeDisplayed();
    firstSpanText = await parentSpan.$('span:nth-child(1)').getText();
    secondSpanText = await parentSpan.$('span:nth-child(2)').getText();
    await expect(firstSpanText).toEqual(selectedService);
    await expect(secondSpanText).toEqual(expectedValue);
    console.log('key: ',firstSpanText,', Value: ',secondSpanText);



    // Locate and assert GPU Model
    selectedService = "GPU Model";
    expectedValue = "NVIDIA V100";
    parentSpanXPath = `//span[contains(@class, "Z7Pe2d") and contains(@class, "g5Ano")][span[1][text()="${selectedService}"] and span[2][text()="${expectedValue}"]]`;
    parentSpan = await $(parentSpanXPath);
    await expect(parentSpan).toBeDisplayed();
    firstSpanText = await parentSpan.$('span:nth-child(1)').getText();
    secondSpanText = await parentSpan.$('span:nth-child(2)').getText();
    await expect(firstSpanText).toEqual(selectedService);
    await expect(secondSpanText).toEqual(expectedValue);
    console.log('key: ',firstSpanText,', Value: ',secondSpanText);



    // Locate and assert Number of GPUs
    selectedService = "Number of GPUs";
    expectedValue = "1";
    parentSpanXPath = `//span[contains(@class, "Z7Pe2d") and contains(@class, "g5Ano")][span[1][text()="${selectedService}"] and span[2][text()="${expectedValue}"]]`;
    parentSpan = await $(parentSpanXPath);
    await expect(parentSpan).toBeDisplayed();
    firstSpanText = await parentSpan.$('span:nth-child(1)').getText();
    secondSpanText = await parentSpan.$('span:nth-child(2)').getText();
    await expect(firstSpanText).toEqual(selectedService);
    await expect(secondSpanText).toEqual(expectedValue);
    console.log('key: ',firstSpanText,', Value: ',secondSpanText);



    // Locate and assert Local SSD
    selectedService = "Local SSD";
    expectedValue = "2x375 GB";
    parentSpanXPath = `//span[contains(@class, "Z7Pe2d") and contains(@class, "g5Ano")][span[1][text()="${selectedService}"] and span[2][text()="${expectedValue}"]]`;
    parentSpan = await $(parentSpanXPath);
    await expect(parentSpan).toBeDisplayed();
    firstSpanText = await parentSpan.$('span:nth-child(1)').getText();
    secondSpanText = await parentSpan.$('span:nth-child(2)').getText();
    await expect(firstSpanText).toEqual(selectedService);
    await expect(secondSpanText).toEqual(expectedValue);
    console.log('key: ',firstSpanText,', Value: ',secondSpanText);



    // Locate and assert Region
    selectedService = "Region";
    expectedValue = "Oregon (us-west1)";
    parentSpanXPath = `//span[contains(@class, "Z7Pe2d") and contains(@class, "g5Ano")][span[1][text()="${selectedService}"] and span[2][text()="${expectedValue}"]]`;
    parentSpan = await $(parentSpanXPath);
    await expect(parentSpan).toBeDisplayed();
    firstSpanText = await parentSpan.$('span:nth-child(1)').getText();
    secondSpanText = await parentSpan.$('span:nth-child(2)').getText();
    await expect(firstSpanText).toEqual(selectedService);
    await expect(secondSpanText).toEqual(expectedValue);
    console.log('key: ',firstSpanText,', Value: ',secondSpanText);



    // Locate and assert Committed use discount options
    selectedService = "Committed use discount options";
    expectedValue = "1 year";
    parentSpanXPath = `//span[contains(@class, "Z7Pe2d") and contains(@class, "g5Ano")][span[1][text()="${selectedService}"] and span[2][text()="${expectedValue}"]]`;
    parentSpan = await $(parentSpanXPath);
    await expect(parentSpan).toBeDisplayed();
    firstSpanText = await parentSpan.$('span:nth-child(1)').getText();
    secondSpanText = await parentSpan.$('span:nth-child(2)').getText();
    await expect(firstSpanText).toEqual(selectedService);
    await expect(secondSpanText).toEqual(expectedValue);
    console.log('key: ',firstSpanText,', Value: ',secondSpanText);



  });
});
