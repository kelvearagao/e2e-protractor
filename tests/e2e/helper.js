var uuid = require("node-uuid");
var Helper = function () {};

Helper.prototype.generateRandomString = function () {
  return uuid.v4();
};

module.exports = Helper;
