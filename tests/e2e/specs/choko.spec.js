var CreateAccountPage = require("../page-objects/chokoCreateAccount.po.js");
var MessagesWrapper = require("../page-objects/chokoMessagesWrapper.po.js");
var SignInPage = require("../page-objects/chokoSignIn.po.js");
var Helper = require("../helper");
const { element } = require("protractor");

var EC = protractor.ExpectedConditions;
var messageWrapper = new MessagesWrapper();

describe("Choko - Sign in", function () {
  var signInPage = new SignInPage();

  it("try to sign in without filling any field", async () => {
    await signInPage.visit();
    signInPage.signInButton.click();
    //browser.driver.sleep(500);

    // Waits for the element with id 'abc' to be visible on the dom.
    //browser.wait(EC.invisibilityOf(messageWrapper.errorMessage.get(0)), 5000);

    browser.wait(
      EC.textToBePresentInElement(
        messageWrapper.errorMessage.get(0),
        "Email cannot be empty."
      ),
      5000
    );

    expect(messageWrapper.errorMessage.get(0).isDisplayed()).toBe(true);
  });

  it("try to sign in with a random email and random password", async () => {
    var helper = new Helper();
    var randomEmail = helper.generateRandomEmail();
    var randomPassword = helper.generateRandomString();

    await signInPage.visit();
    const el = messageWrapper.errorMessage.get(0);

    signInPage.usernameField.sendKeys(randomEmail);
    signInPage.passwordField.sendKeys(randomPassword);
    signInPage.signInButton.click();
    browser.wait(EC.visibilityOf(el), 5000);

    expect(el.getText()).toContain("The email or password is incorrect.");
  });
});

describe("Choko - Create account", function () {
  var createAccountPage = new CreateAccountPage();

  it("try to create account without filling any field", async function () {
    await createAccountPage.visit();
    createAccountPage.createAccountButton.click();
    const el = messageWrapper.errorMessage.get(1);

    browser.wait(EC.visibilityOf(el), 5000);

    expect(el.getText()).toContain("Email cannot be empty.");
  });
});
