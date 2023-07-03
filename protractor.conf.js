const conf = {
   // specs: ['./specs/**/*.spec.js'],
   specs: ['./specs/second.spec.js'],
    framework: "mocha",
    mochaOpts:{
        timeout: 40 * 1000
    },
    onPrerape (){
        browser.waitForAngularEnabled(false)
    },
    SELENIUM_PROMISE_MANAGER: false
  };

exports.config = conf