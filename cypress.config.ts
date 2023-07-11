import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: "test/cypress/fixtures",
    screenshotsFolder: "test/cypress/screenshots",
    videosFolder: "test/cypress/videos",

  e2e: {
    baseUrl: 'https://infinica-training.cloud.infinica.com/infinica-business-designer/',
    supportFile: 'test/cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
    },

    specPattern: 'test/cypress/e2e/**/*.cy.{ts,tsx}',
  },
});
