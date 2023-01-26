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

Given('que acesso a página de login do Publicazo', { timeout: 30 * 1000 }, async () => {
    await driver.get("http://publicazo.insprak.com/")
    await driver.findElement(By.linkText("Entrar")).click()
    await driver.findElement(By.css(".text-center")).click()
    assert(await driver.findElement(By.css(".text-center")).getText() == "Entrar")
});

When('informo os dados válidos para login', { timeout: 30 * 1000 }, async () => {
    await driver.findElement(By.id("user_email")).click()
    await driver.findElement(By.id("user_email")).sendKeys("teste001@hotmail.com")
    await driver.findElement(By.id("user_password")).click()
    await driver.findElement(By.id("user_password")).sendKeys("Teste@123")
    await driver.findElement(By.name("commit")).click()
});

Then('devo ver a mensagem "Logado com sucesso."', { timeout: 30 * 1000 }, async () => {
    await driver.findElement(By.css(".toast")).click()
    assert(await driver.findElement(By.css(".toast-message")).getText() == "Logado com sucesso.")
    await driver.close()
});