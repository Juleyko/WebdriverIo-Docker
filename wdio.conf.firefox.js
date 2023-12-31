export const config = {
  //
  before: function (capabilities, specs) {
    browser.url("https://elementalselenium.com/");
    browser.setWindowSize(1200, 800);
  },
  runner: "local",

  specs: ["./test/**/specs/*.js"],
  capabilities: [
    {
      maxInstances: 1,
      browserName: "firefox",
      acceptInsecureCerts: true,
    },
  ],

  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  // services: ["chromedriver"],
  services: ["docker"],
  framework: "mocha",
  reporters: [
    // "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
