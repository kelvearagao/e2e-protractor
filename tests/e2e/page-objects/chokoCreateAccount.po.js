var chokoCreateAccountPage = function () {
  this.createAccountButton = element(by.id("submit-button"));
};

chokoCreateAccountPage.prototype.visit = async function () {
  await browser.waitForAngularEnabled(false);
  await browser.get("https://stackoverflow.com/users/signup");
};

module.exports = chokoCreateAccountPage;
