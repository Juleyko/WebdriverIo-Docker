export const config = {
  //
  before: function (capabilities, specs) {
    browser.url("https://elementalselenium.com/");
    browser.setWindowSize(1200, 800);
  },
  runner: "local",
  specs: ["./test/**/specs/*.js"],
  maxInstances: 2,

  capabilities: [
    {
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
    {
      browserName: "firefox",
      acceptInsecureCerts: true,
    },
  ],
  port: 4444,
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
