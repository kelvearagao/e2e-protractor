var ChokoSignInPage = function () {
  this.signInButton = element(by.id("submit-button"));
  this.usernameField = element(by.id("email"));
  this.passwordField = element(by.id("password"));
};

ChokoSignInPage.prototype.visit = async function () {
  await browser.waitForAngularEnabled(false);
  await browser.get("https://stackoverflow.com/users/login");
};

ChokoSignInPage.prototype.signIn = function (email, password) {
  this.usernameField.sendKeys(email);
  this.passwordField.sendKeys(password);
  this.signInButton.click();
};

module.exports = ChokoSignInPage;
