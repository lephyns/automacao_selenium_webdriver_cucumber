const { Given, Then, When, Before, After } = require('@cucumber/cucumber')

Given('usuario acessa menu de cadastro', function () {
  driver.get("http://publicazo.insprak.com/")
  driver.findElement(By.linkText("Cadastre-se")).click()
  driver.findElement(By.css(".text-center")).click()
  assert(driver.findElement(By.css(".text-center")).getText() == "Cadastre-se")
});

When('preenche campos nome,email,senha e confirmacao', function () {
  driver.findElement(By.id("user_fullname")).click()
  driver.findElement(By.id("user_fullname")).sendKeys("Reinaldo Peres")
  driver.findElement(By.id("user_email")).click()
  driver.findElement(By.id("user_email")).sendKeys("reiiiiipeeeeres@hotmail.com")
  driver.findElement(By.id("user_password")).sendKeys("Teste@123")
  driver.findElement(By.id("user_password_confirmation")).click()
  driver.findElement(By.id("user_password_confirmation")).sendKeys("Teste@123")
  driver.findElement(By.name("commit")).click()
});

Then('o sistema exibe uma mensagem de sucesso', function () {
  driver.findElement(By.css(".toast-message")).click()
});