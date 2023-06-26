import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://infinica-training.cloud.infinica.com/infinica-business-designer/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
