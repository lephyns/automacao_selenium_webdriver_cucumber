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

Given('que acesso a página de cadastro do site Publicazo', { timeout: 30 * 1000 }, async () => {
    await driver.get("http://publicazo.insprak.com/")
    await driver.findElement(By.css("h1")).click()
    assert(await driver.findElement(By.css("h1")).getText() == "Publicazo Pesquise pelos melhores serviços na sua cidade.")
});

Given('submeto o formulário de cadastro com dados válidos', { timeout: 30 * 1000 }, async () => {
    await driver.findElement(By.linkText("Cadastre-se")).click()
    await driver.findElement(By.css(".text-center")).click()
    assert(await driver.findElement(By.css(".text-center")).getText() == "Cadastre-se")
    await driver.findElement(By.id("user_fullname")).click()
    await driver.findElement(By.id("user_fullname")).sendKeys("Reinaldo Peres")
    await driver.findElement(By.id("user_email")).click()
    await driver.findElement(By.id("user_email")).sendKeys("teste001@hotmail.com")
    await driver.findElement(By.id("user_password")).sendKeys("Teste@123")
    await driver.findElement(By.id("user_password_confirmation")).click()
    await driver.findElement(By.id("user_password_confirmation")).sendKeys("Teste@123")
    await driver.findElement(By.name("commit")).click()
});

Given('devo ver a mensagem "Bem-vindo! Você se registrou com sucesso."', { timeout: 30 * 1000 }, async () => {
    await driver.findElement(By.css(".toast-message")).click()
    // await driver.findElement(By.css(".img-circle")).click()
    // await driver.findElement(By.linkText("Sair")).click()
    await driver.close()
});