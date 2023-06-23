const conf = {
    specs: ['./specs/**/*.spec.js'],
    framework: "mocha",
    mochaOpts:{
        timeout: 20 * 1000
    },
    onPrerape (){
        browser.waitForAngularEnabled(false)
    },
    SELENIUM_PROMISE_MANAGER: false
  };

exports.config = conf