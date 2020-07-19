describe("Homepage", function () {
  it("perform a search into the api page", function () {
    browser.waitForAngularEnabled(true);
    browser.get("#/api");

    element(by.model("searchTerm")).sendKeys("restart");
    element(by.css(".depth-1")).click();

    expect(element(by.css(".api-title")).getText()).toContain(
      "browser.restart"
    );

    //browser.driver.sleep(5000);
  });
});

/*

> webdriver-manager version # 12.0.6
> webdriver-manager shutdown
> webdriver-manager clean # remove the downloaded driver files 
> webdriver-manager update --ignore_ssl # bypass network proxy
> webdriver-manager start 

*/
