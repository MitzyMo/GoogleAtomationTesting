## WebdriverIOProjectTask3

# Automate the following script: 
1. Open https://cloud.google.com/.
2. Click on the icon at the top of the portal page and enter "Google Cloud Platform Pricing Calculator" into the search field.
3. Perform the search.
4. Click "Google Cloud Platform Pricing Calculator" in the search results and go to the calculator page.
5. Click COMPUTE ENGINE at the top of the page.
6. Fill out the form with the following data:
   * Number of instances: 4
   * Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or another User-Provided OS
   * Provisioning model: Regular
   * Machine Family: General purpose 
   * Series: N1 
   * Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
   * Select “Add GPUs“
   * GPU type: NVIDIA Tesla V100
   * Number of GPUs: 1
   * Local SSD: 2x375 Gb
   * Datacenter location: Oregon (us-west1)
   * Committed usage: 1 Year
Other options leave in the default state.
7. Click 'Add to Estimate'.
8. Check the price is calculated in the right section of the calculator. There is a line “Total Estimated Cost: USD ${amount} per 1 month” 
9. click "Share" to see Total estimated cost
10. click "Open estimate summary" to see Cost Estimate Summary, will be opened in separate tab browser.
11. verify that the 'Cost Estimate Summary' matches with filled values in Step 6.

## WebdriverIOProjectTask4

# Automate the following script: 
Use your completed Task 3 from the WebDriver module as a precondition for the current task, in which you need to develop a framework based on it, which will include the following features:

1. Page Object/Page Factory for page abstractions
2. Component objects of the required elements
3. Property files with test data for at least two different environments
4. Suites for smoke tests and other tests should be configured
5. If the test fails, a screenshot with the date and time is taken.

Please find the precondition discription below and provide the link to your solution in the comment field.
Precondition. Previous assignment (Task 3) from WebDriver module: 

Automate the following script: 

1. Open https://cloud.google.com/.
2. Click on the icon at the top of the portal page and enter "Google Cloud Platform Pricing Calculator" into the search field.
3. Perform the search.
4. Click "Google Cloud Platform Pricing Calculator" in the search results and go to the calculator page.
5. Click COMPUTE ENGINE at the top of the page.
6. Fill out the form with the following data:
   * Number of instances: 4
   * Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or another User-Provided OS
   * Provisioning model: Regular
   * Machine Family: General purpose 
   * Series: N1 
   * Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
   * Select “Add GPUs“
   * GPU type: NVIDIA Tesla V100
   * Number of GPUs: 1
   * Local SSD: 2x375 Gb
   * Datacenter location: Oregon (us-west1)
   * Committed usage: 1 Year
Other options leave in the default state.
7. Click 'Add to Estimate'.
8. Click "Share" to see Total estimated cost.
9. Check the price is calculated in the right section of the calculator. There is a line “Total Estimated Cost: USD ${amount} per 1 month” 
10. Click "Open estimate summary" to see Cost Estimate Summary, will be opened in separate tab browser.
11. Verify that the 'Cost Estimate Summary' matches with filled values in Step 6. 

## Run Test

1. npm run test:dev
2. npm run test:qa
3. npm run report