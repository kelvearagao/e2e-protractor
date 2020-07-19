const CreateAccountPage = require("../page-objects/chokoCreateAccount.po.js");
const MessagesWrapper = require("../page-objects/chokoMessagesWrapper.po.js");
const SignInPage = require("../page-objects/chokoSignIn.po.js");
const Helper = require("../helper");
const { element } = require("protractor");

const EC = protractor.ExpectedConditions;
const messageWrapper = new MessagesWrapper();
const helper = new Helper();

describe("Choko - Sign in", () => {
  const signInPage = new SignInPage();

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
    const randomEmail = helper.generateRandomEmail();
    const randomPassword = helper.generateRandomString();

    await signInPage.visit();
    const el = messageWrapper.errorMessage.get(0);

    signInPage.usernameField.sendKeys(randomEmail);
    signInPage.passwordField.sendKeys(randomPassword);
    signInPage.signInButton.click();
    browser.wait(EC.visibilityOf(el), 5000);

    expect(el.getText()).toContain("The email or password is incorrect.");
  });

  it("try to sign in with a random email and random password - refactored", async () => {
    const randomEmail = helper.generateRandomEmail();
    const randomPassword = helper.generateRandomString();
    const el = messageWrapper.errorMessage.get(0);

    await signInPage.visit();
    signInPage.signIn(randomEmail, randomPassword);
    browser.wait(EC.visibilityOf(el), 5000);

    expect(el.isDisplayed()).toBe(true);
  });

  it("try to sign in just filling the email field", async () => {
    const randomEmail = helper.generateRandomEmail();
    const el = messageWrapper.errorMessage.get(1);

    await signInPage.visit();

    signInPage.usernameField.sendKeys(randomEmail);
    signInPage.signInButton.click();

    helper.waitElementVisibility(el);

    expect(el.isDisplayed()).toBe(true);
  });
});

describe("Choko - Create account", () => {
  const createAccountPage = new CreateAccountPage();

  it("try to create account without filling any field", async () => {
    await createAccountPage.visit();
    createAccountPage.createAccountButton.click();
    const el = messageWrapper.errorMessage.get(1);

    browser.wait(EC.visibilityOf(el), 5000);

    expect(el.getText()).toContain("Email cannot be empty.");
  });
});
