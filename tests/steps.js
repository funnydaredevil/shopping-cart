var timeout = 5000;
var randomString;
describe('Protractor Demo App', function () {
  it('random generator', function () {
    randomString = function (length) {
      var text = "";
      var possible = "abcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };
  });
  it('login', function () {
    console.log("log: Step №1 :Start Browser to get Product... ");
    browser.manage().window().maximize();
    browser.get('/index.html').then(function () {
      console.log("log: Products loaded...");
      browser.takeScreenshot();
    });
  });
});
