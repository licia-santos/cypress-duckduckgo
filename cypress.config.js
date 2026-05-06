const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.google.com.br',
    screenshotOnRunFailure: true,
    video: false,
  },
});