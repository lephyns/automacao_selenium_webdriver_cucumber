const { Given, Then, When, Before, After } = require('@cucumber/cucumber')
const assert = require('assert')
const webdriver = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver')

//SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const ChromeDriver = require('chromedriver');
var options = new chrome.Options().headless();
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();

Given('que acesso a página inicial do Publicazo', { timeout: 30 * 1000 }, async () => {
    await driver.get("http://publicazo.insprak.com/")
    await driver.findElement(By.css("h3")).click()
    assert(await driver.findElement(By.css("h3")).getText() == "Serviços")
});

When('pesquiso por um anúncio', { timeout: 30 * 1000 }, async () => {
    await driver.findElement(By.id("search")).click()
    await driver.findElement(By.id("search")).sendKeys("Aulas de mandarim")
    await driver.findElement(By.name("commit")).click()
});

Then('devo ver o anúncio publicado', { timeout: 30 * 1000 }, async () => {
    await driver.findElement(By.css(".col-md-4:nth-child(65) .panel-body")).click()
    assert(await driver.findElement(By.linkText("Aulas de mandarim")).getText() == "Aulas de mandarim")
    await driver.close()
});


