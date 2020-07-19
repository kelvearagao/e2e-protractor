describe("Todo MVC Angular", function () {
  var newTodoField = element(by.model("newTodo"));

  it("add an item in the todo list", function () {
    browser.waitForAngularEnabled(true);
    browser.get("http://todomvc.com/examples/angularjs/#/");
    newTodoField.sendKeys("Create test without page object");
    newTodoField.sendKeys(protractor.Key.ENTER);

    expect(element.all(by.css(".view")).count()).toEqual(1);
  });

  it("add new item in the todo list", function () {
    browser.waitForAngularEnabled(true);
    browser.get("http://todomvc.com/examples/angularjs/#/");
    newTodoField.sendKeys("Create new test without page object");
    newTodoField.sendKeys(protractor.Key.ENTER);

    expect(element.all(by.css(".view")).count()).toEqual(2);
  });
});
