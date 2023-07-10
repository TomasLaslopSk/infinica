import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://infinica-training.cloud.infinica.com/infinica-business-designer/',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
    },
  },
});
