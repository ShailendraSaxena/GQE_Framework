const { Before, After, Status }= require('@cucumber/cucumber');
const { allure } = require('allure-js-commons')

Before( ()=> {
    if (allure) {
        allure.startStep('Starting step');
      } else {
        console.error('Allure is not initialized');
      }  
});

After((scenario)=> {
    if (scenario.result.status === Status.FAILED) {
        // Log the response details
        console.log('Test Failed:', scenario.result);
    
        // Attach request and response to Allure Report
        if (allure) {
          allure.addAttachment('Request', JSON.stringify(this.request, null, 2), 'application/json');
          allure.addAttachment('Response', JSON.stringify(this.response, null, 2), 'application/json');
        } else {
          console.error('Allure is not initialized');
        }
      }
      if (allure) {
        allure.endStep();
        allure.writeEnvironmentInfo();
      } else {
        console.error('Allure is not initialized');
      }
});