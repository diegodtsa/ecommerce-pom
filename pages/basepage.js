const {Builder, By} = require("selenium-webdriver");
var driver = new Builder().forBrowser("chrome").build();

class BasePage{

    constructor(){
        global.driver = driver
    }

    goTo(url){
        driver.get(url)
    }

    enterText(locator, info){
        driver.findElement(locator).sendKeys(info);
    }

    mouseClick(locator){
        driver.findElement(locator).click();
    }

}

module.exports = BasePage;