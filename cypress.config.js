const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome', // HTML reporter
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,              
    html: true,                    
    json: true,                    
    charts: true,                  
    embeddedScreenshots: true,     
    saveAllAttempts: true          
  },
  e2e: {
    baseUrl: 'https://practicesoftwaretesting.com',
  },
})