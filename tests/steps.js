var timeout = 5000;
var randomString;
var item_by_id = by.id('element_id');
var view_cart_btn = by.xpath("//button[contains(concat(' ', @class, ' '), ' view-cart ')]//span[1]");
var view_cart_caption = by.xpath(view_cart_btn + "//span[1]");

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
      // element(signIn_location).click();
      expect(element(view_cart_btn).isDisplayed());
      expect(element(view_cart_btn).getAttribute('disabled').getText().toEqual('disabled'));
      // expect(element(view_cart_caption).getText().toEqual('View Cart (0)'));
      console.log("log: Products loaded...");
      browser.takeScreenshot();
    });
  });
});
