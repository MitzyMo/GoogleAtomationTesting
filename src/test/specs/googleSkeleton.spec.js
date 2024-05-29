describe("Google Cloud Platform Pricing Calculator Test Suite", () => {
  beforeEach(async () => {
    await browser.url("https://cloud.google.com/");
  });

  it("should fill out the Google Cloud Platform Pricing Calculator form", async () => {
    //--------- Main Page Start--------
    // Click on the icon and enter search term
    await $('div.YSM5S[jsname="Ohx1pb"]').waitForClickable();
    await $('div.YSM5S[jsname="Ohx1pb"]').click();
    console.log("1. Search icon clicked");
    // Perform the search
    const searchInput = await $('input[aria-label="Search"]');
    await searchInput.waitForDisplayed();
    await searchInput.setValue("Google Cloud Platform Pricing Calculator");
    await browser.keys("Enter");
    await browser.pause(5000); // or use waitForElement to ensure search results are loaded
    console.log("2. Entering search term.");
    //--------- Main Page End--------
    //--------- Search Page Start--------
    // Step 4: Click the calculator link in the search results
    await $(
      'a[href="https://cloud.google.com/products/calculator"]'
    ).waitForClickable();
    await $('a[href="https://cloud.google.com/products/calculator"]').click();
    console.log("3. Link Clicked.");
    //--------- Search Page End--------
    //--------- Google Cloud's pricing calculator Page Start--------
    // Step 5: Add Estimated
    await $("span.UywwFc-vQzf8d").waitForClickable();
    await $("span.UywwFc-vQzf8d").click();
    console.log("4. Add Estimated clicked.");
    // Step 6: Select Compute Engine
    //--------- Google Cloud's pricing calculator Page End--------
    //--------- Add to this estimate Pop Up Page Start--------
    await $(
      `//*[contains(@class, 'honxjf') and contains(text(), 'Compute Engine')]`
    ).waitForClickable();
    await $(
      `//*[contains(@class, 'honxjf') and contains(text(), 'Compute Engine')]`
    ).click();
    console.log("5. Compute Engine clicked.");
    //--------- Add to this estimate Pop Up Page End--------
    //--------- Compute Engine Calculator Page Start--------
    //--------- Compute Engine Calculator Form Page Start--------
    // Step 7: Fill out the form
    // Select the number of instances
    for (let i = 0; i < 3; i++) {
      await $('div.QiFlid button[aria-label="Increment"]').waitForClickable();
      await $('div.QiFlid button[aria-label="Increment"]').click();
    }
    console.log("6. Set instances.");
    // Select the dropdown Free: Debian, CentOS.
    await $(
      '//div[@role="combobox"][.//span[@class="VfPpkd-t08AT-Bz112c"] and .//span[@jscontroller="liGIGc" and text()="Operating System / Software"]]'
    ).waitForClickable();
    await $(
      '//div[@role="combobox"][.//span[@class="VfPpkd-t08AT-Bz112c"] and .//span[@jscontroller="liGIGc" and text()="Operating System / Software"]]'
    ).click();
    console.log("7. Select dropdown.");
    // ---
    await $(
      'ul.VfPpkd-rymPhb > li[data-value="free-debian-centos-coreos-ubuntu-or-byol-bring-your-own-license"]'
    ).waitForClickable();
    await $(
      'ul.VfPpkd-rymPhb > li[data-value="free-debian-centos-coreos-ubuntu-or-byol-bring-your-own-license"]'
    ).click();
    console.log("7.1. Select Free:.");
    //Select Provisioning model: Regular
    await $(
      '//div[contains(@class, "e2WL2b MYT3K pV2hx oLWDHd") and .//label[@for="regular"]]'
    ).waitForClickable();
    await $(
      '//div[contains(@class, "e2WL2b MYT3K pV2hx oLWDHd") and .//label[@for="regular"]]'
    ).click();
    console.log("8. Select Regular.");
    //Machine Family: General purpose
    await $(
      '//div[@role="combobox"][.//span[@class="VfPpkd-t08AT-Bz112c"] and .//span[@jscontroller="liGIGc" and text()="Machine Family"]]'
    ).waitForClickable();
    await $(
      '//div[@role="combobox"][.//span[@class="VfPpkd-t08AT-Bz112c"] and .//span[@jscontroller="liGIGc" and text()="Machine Family"]]'
    ).click();
    console.log("9. Got to Machine Family.");
    //-----
    await $('//li[@data-value="general-purpose"]').waitForClickable();
    await $('//li[@data-value="general-purpose"]').click();
    console.log("9.1 Select General Purpose.");
    //Series: N1
    await $(
      '//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Series"]]'
    ).waitForClickable();
    await $(
      '//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Series"]]'
    ).click();
    console.log("10. Go to Series.");
    //-----
    await $('//li[@data-value="n1"]').waitForClickable();
    await $('//li[@data-value="n1"]').click();
    console.log("10.1 Select N1.");
    //Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
    await $(
      '//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Machine type"]]'
    ).waitForClickable();
    await $(
      '//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Machine type"]]'
    ).click();
    console.log("11 Go to Machine Type.");
    //-----
    await $('//li[@data-value="n1-standard-8"]').waitForClickable();
    await $('//li[@data-value="n1-standard-8"]').click();
    console.log("11.1 Select  n1-standard-8 (vCPUs: 8, RAM: 30 GB).");
    //Select “Add GPUs“
    await $('//button[@aria-label="Add GPUs"]').waitForClickable();
    await $('//button[@aria-label="Add GPUs"]').click();
    console.log("12. Select Add GPUs.");
    //GPU type: NVIDIA Tesla V100
    await $(
      '//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="GPU Model"]]'
    ).waitForClickable();
    await $(
      '//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="GPU Model"]]'
    ).click();
    console.log("13. Go to GPU Type.");
    //-----
    await $('//li[@data-value="nvidia-tesla-v100"]').waitForClickable();
    await $('//li[@data-value="nvidia-tesla-v100"]').click();
    console.log("13.1 Select NVIDIA Tesla V100.");
    //Number of GPUs: 1
    await $(
      '//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Number of GPUs"]]'
    ).waitForClickable();
    await $(
      '//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Number of GPUs"]]'
    ).click();
    console.log("14. Go to # of GPUs.");
    //-----
    await $(
      '//li[@data-value="1"][.//span[@jsname="K4r5Ff" and text()="1"]]'
    ).waitForClickable();
    await $(
      '//li[@data-value="1"][.//span[@jsname="K4r5Ff" and text()="1"]]'
    ).click();
    console.log("14.1 Select 1 GPU.");
    //Local SSD: 2x375 Gb
    await $(
      '//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Local SSD"]]'
    ).waitForClickable();
    await $(
      '//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Local SSD"]]'
    ).click();
    console.log("15. Go to Local SSD");
    //-----
    await $(
      '//li[@data-value="2"][.//span[@jsname="K4r5Ff" and text()="2x375 GB"]]'
    ).waitForClickable();
    await $(
      '//li[@data-value="2"][.//span[@jsname="K4r5Ff" and text()="2x375 GB"]]'
    ).click();
    console.log("15.1 Select 2x375 Gb.");
    //Datacenter location: Frankfurt (europe-west3) // In this case: Oregon (us-west1)
    await $(
      '//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Region"]]'
    ).waitForClickable();
    await $(
      '//div[@jscontroller="GPHYJd"][.//span[@jscontroller="liGIGc" and text()="Region"]]'
    ).click();
    console.log("16. Region");
    //-----
    await $('//li[@data-value="us-west1"]').waitForClickable();
    await $('//li[@data-value="us-west1"]').click();
    console.log("16.1 Select Oregon (us-west1).");
    //Committed usage: 1 Year
    await $(
      '//div[contains(@class, "e2WL2b MYT3K pV2hx oLWDHd") and .//label[@for="1-year"]]'
    ).waitForClickable();
    await $(
      '//div[contains(@class, "e2WL2b MYT3K pV2hx oLWDHd") and .//label[@for="1-year"]]'
    ).click();
    console.log("17. Commited to 1 Year.");
    //--------- Compute Engine Calculator Form End--------
    //--------- Compute Engine Calculator Summary Start--------
    // Step 8: Check the price is calculated
    const estimatedCostElement = await $('//div[@class="PuMEh W42XEf"]');
    const estimatedCostText = await estimatedCostElement.getText();
    console.log(`Estimated Cost: ${estimatedCostText}`);
    expect(estimatedCostText).toContain("ESTIMATED COST");
    // Step 9: Click 'Share'
    await $(
      '//button[@aria-label="Open Share Estimate dialog"]'
    ).waitForDisplayed({ timeout: 2000 });
    await $(
      '//button[@aria-label="Open Share Estimate dialog"]'
    ).waitForClickable({ timeout: 2000 });
    await $('//button[@aria-label="Open Share Estimate dialog"]').click();
    console.log("Shared Button Pressed");
    //--------- Compute Engine Calculator Summary End--------
    //--------- Share Estimate Start--------
    // Step 10: Verify 'Total estimated cost' text in the share dialog
    await $(
      '//span[contains(text(), "Total estimated cost")]'
    ).waitForDisplayed({ timeout: 5000 });
    const totalEstimatedCostElement = await $(
      '//span[contains(text(), "Total estimated cost")]'
    );
    await totalEstimatedCostElement.waitForDisplayed({ timeout: 10000 });
    console.log(`totalEstimatedCostElement: ${totalEstimatedCostElement}`);
    // Locate the total estimated cost parent element to extract the cost
    const totalEstimatedCostParentElement = await totalEstimatedCostElement.$(
      ".."
    );
    const costElement = await totalEstimatedCostParentElement.$(
      ".gN5n4.MyvX5d.D0aEmf"
    );
    const totalEstimatedCostText = await costElement.getText();

    console.log(`costElement: ${costElement}`);
    console.log(`totalEstimatedCostText: ${totalEstimatedCostText}`);

    console.log("Review Total estimates in pop up");
    console.log(`Total: ${totalEstimatedCostText}`);

    // Validate the format "Total Estimated Cost ${amount} / month"
    const regex = /^\$[\d,]+\.\d{2} \/ month$/;
    expect(totalEstimatedCostText).toMatch(regex);
    console.log(`Total: ${regex}`);

    // Step 11: Open estimate summary
    console.log("will enter to click");
    await $('//a[contains(text(),"Open estimate summary")]').waitForDisplayed({
      timeout: 1000,
    });
    await $('//a[contains(text(),"Open estimate summary")]').waitForClickable({
      timeout: 1000,
    });
    await $('//a[contains(text(),"Open estimate summary")]').click();
    console.log("Clicked in");

    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    console.log("Switched");
    // Verification code can be more specific, this is a simplified version
    //Number of Instances: 4
    //Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or another User-Provided OS
    //Provisioning model: Regular
    //Machine type: n1-standard-8, vCPUs: 8, RAM: 30 GB
    //Add GPUs: true
    //GPU Model: NVIDIA V100
    //Number of GPUs: 1
    //Local SSD: 2x375 Gb
    //Region: Oregon (us-west1)
    //Committed use discount options: 1 Year
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
