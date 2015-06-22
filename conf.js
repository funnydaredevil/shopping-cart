exports.config = {
  specs: ['tests/steps.js'],
    capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:3030',
  framework: 'jasmine',
  onPrepare: function () {
    browser.ignoreSynchronization = true;

  },
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 1200000
  }
};
