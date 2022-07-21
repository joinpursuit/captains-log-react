const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "cypress-watch-and-reload": {
    watch: "src/**/*.js",
  },

  env: {
    URL: "http://localhost:3000",
    API: "http://localhost:9000",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
