var shortid = require("shortid");
var uuid = require("node-uuid");

var Helper = function () {};

Helper.prototype.generateRandomEmail = function () {
  return shortid.generate() + "@email.com";
};

Helper.prototype.generateRandomString = function () {
  return uuid.v4();
};

module.exports = Helper;
