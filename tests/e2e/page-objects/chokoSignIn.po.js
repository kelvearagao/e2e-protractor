var ChokoSignInPage = function () {
  this.signInButton = element(by.id("submit-button"));
  this.usernameField = element(by.id("email"));
  this.passwordField = element(by.id("password"));
};

ChokoSignInPage.prototype.visit = async function () {
  await browser.waitForAngularEnabled(false);
  await browser.get("https://stackoverflow.com/users/login");
};

module.exports = ChokoSignInPage;
