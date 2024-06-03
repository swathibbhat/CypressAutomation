// const { defineConfig } = require("cypress");

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   //await addCucumberPreprocessorPlugin(on, config);

//   //on("file:preprocessor", preprocessor(config));

//   // Make sure to return the config object as it might have been modified by the plugin.
//   //return config;
// }

// module.exports = defineConfig({

//   projectId: "96aimc",
//   reporter: 'cypress-multi-reporters',
//   reporterOptions: {
//     reporterEnabled: 'mochawesome',
//     retries: {
//       runMode: 1,
//       },
//     mochawesomeReporterOptions: {
//       reportDir: 'cypress/reports', 
//       overwrite: false,
//       html: true, 
//       json: false, 
//       embeddedScreenshots: true,
//       embeddedVideos: true,
      
//     }
//   },

//   e2e: {
//     baseUrlAPI: "https://swapi.dev/api",
//     baseUrlUI: "https://www.amazon.in/",
//     specPattern: 'cypress/integration/examples/*.js',
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//       // Additional plugins can be added here if necessary
//       return config;
//     }
//     //screenshotsFolder: 'cypress/screenshots',
//     //videosFolder: 'cypress/videos', 
//   },
// });
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '96aimc',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: false,
    embeddedScreenshots: true,
    embeddedVideos: true
  },
  e2e: {
    baseUrlAPI: 'https://swapi.dev/api',
    baseUrlUI: 'https://www.amazon.in/',
    specPattern: 'cypress/integration/examples/*.js',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    }
  }
});
