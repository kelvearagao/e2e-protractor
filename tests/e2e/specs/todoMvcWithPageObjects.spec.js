var TodoMvc = require("../page-objects/todoMvc.po.js");

describe("Todo MVC Angular", function () {
  var todoMvc = new TodoMvc();

  beforeAll(() => {
    browser.executeScript("window.localStorage.clear();");
  });

  beforeEach(function () {
    todoMvc.visit();
  });

  it("add an item in the todo list", function () {
    todoMvc.addItemOnTodoList("Create test without page object");
    expect(todoMvc.listOfItems.count()).toEqual(1);
  });

  it("add new item in the todo list", function () {
    todoMvc.addItemOnTodoList("Create new test without page object");
    expect(todoMvc.listOfItems.count()).toEqual(2);
  });
});
