exports.config = {
    specs: ['tests/steps.js'],
        capabilities: {
        browserName: 'chrome'
    },
    baseUrl: './index.html',
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
