const shortid = require("shortid");
const uuid = require("node-uuid");

const Helper = function () {};
const EC = protractor.ExpectedConditions;

Helper.prototype.generateRandomEmail = function () {
  return shortid.generate() + "@email.com";
};

Helper.prototype.generateRandomString = function () {
  return uuid.v4();
};

Helper.prototype.waitElementVisibility = function (element) {
  browser.wait(EC.visibilityOf(element), 3000);
};

module.exports = Helper;
