const { browser } = require("protractor");

var TodoMvc = function () {
  this.listOfItems = element.all(by.css(".view"));
  this.newTodoField = element(by.model("newTodo"));
};

TodoMvc.prototype.addItemOnTodoList = function (item) {
  this.newTodoField.sendKeys(item);
  this.newTodoField.sendKeys(protractor.Key.ENTER);
};

TodoMvc.prototype.visit = function () {
  browser.get("http://todomvc.com/examples/angularjs/#/");
};

module.exports = TodoMvc;
