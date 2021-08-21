const driver = require('../driver');

// Checar se ele esta na tela inicial do sistema
// Procurar botao de Profile
// Checar se ele existe
// Clicar no botao
// Verificar se ta na tela de formulario
// Escrever no formuario login e senha
// clicar nobotao de entrar
// Verificar se ele entrou na tela inicial de um usuario loggado
describe('Testing login in a account', () => {
  beforeAll(async () => {
    await driver;
    await driver.get("http://localhost:8080/test-1.0-SNAPSHOT/pages/home-page.xhtml");
  }, 10000);

//  afterAll(async () => {
//    await driver.quit();
//  }, 10000);

  test('Checking Title', async () => {
    const title = await driver.getTitle();
    // title = 'Titulo da pagina'
    expect(title).toBe('Hotline Wallet');
    
  })

  test('Navegate to Login Page', async () => {
    const btn = await driver.findElement({ id: 'user' });

    const btnIsDisplayed = await btn.isDisplayed();
    expect(btnIsDisplayed).toBe(true);

    await btn.click();

    const title = await driver.getTitle();
    expect(title).toBe('Login');

  })

  

  test('Login Wrong Email', async () => {
    const inputEmail = await driver.findElement({ id: 'mail' });
    const inputPassword = await driver.findElement({ id: 'password' });
    const btn = await driver.findElement({ id: 'log' });

    const inputEmailDisplayed = await inputEmail.isDisplayed();
    expect(inputEmailDisplayed).toBe(true);

    await inputEmail.sendKeys("teste de erro");

    const inputPasswordDisplayed = await inputPassword.isDisplayed();
    expect(inputPasswordDisplayed).toBe(true);

    await inputPassword.sendKeys("kayque");

    const btnIsDisplayed = await btn.isDisplayed();
    expect(btnIsDisplayed).toBe(true);

    await btn.click();
    
    const alert = await driver.switchTo().alert();
    expect( await alert.getText()).toBe("Email ou Senha incorreta"); //Print Alert popup
    await alert.accept(); //Close Alert popup
    await inputEmail.clear();
    await inputPassword.clear();
  })

  test('Submit Wrong Password', async () => {
    const inputEmail = await driver.findElement({ id: 'mail' });
    const inputPassword = await driver.findElement({ id: 'password' });
    const btn = await driver.findElement({ id: 'log' });

    const inputEmailDisplayed = await inputEmail.isDisplayed();
    expect(inputEmailDisplayed).toBe(true);

    await inputEmail.sendKeys("leonardo");

    const inputPasswordDisplayed = await inputPassword.isDisplayed();
    expect(inputPasswordDisplayed).toBe(true);

    await inputPassword.sendKeys("99999999999");

    const btnIsDisplayed = await btn.isDisplayed();
    expect(btnIsDisplayed).toBe(true);

    await btn.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("Email ou Senha incorreta"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup
    await inputEmail.clear();
    await inputPassword.clear();

  })

  test('Submit Empty input', async () => {
    const inputEmail = await driver.findElement({ id: 'mail' });
    const inputPassword = await driver.findElement({ id: 'password' });
    const btn = await driver.findElement({ id: 'log' });

    const inputEmailDisplayed = await inputEmail.isDisplayed();
    expect(inputEmailDisplayed).toBe(true);

    await inputEmail.sendKeys();

    const inputPasswordDisplayed = await inputPassword.isDisplayed();
    expect(inputPasswordDisplayed).toBe(true);

    await inputPassword.sendKeys();

    const btnIsDisplayed = await btn.isDisplayed();
    expect(btnIsDisplayed).toBe(true);

    await btn.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("Todos campos precisam ser preenchidos"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup
    await inputEmail.clear();
    await inputPassword.clear();

  })


  

  test('Submit Correct Login', async () => {
    const inputEmail = await driver.findElement({ id: 'mail' });
    const inputPassword = await driver.findElement({ id: 'password' });
    const btn = await driver.findElement({ id: 'log' });

    const inputEmailDisplayed = await inputEmail.isDisplayed();
    expect(inputEmailDisplayed).toBe(true);

    await inputEmail.sendKeys("leonardo");

    const inputPasswordDisplayed = await inputPassword.isDisplayed();
    expect(inputPasswordDisplayed).toBe(true);

    await inputPassword.sendKeys("kayque");

    const btnIsDisplayed = await btn.isDisplayed();
    expect(btnIsDisplayed).toBe(true);

    await btn.click();

  })

  test('Test is Logged', async () => {
    const url = await driver.getCurrentUrl();
    
    expect(url).toBe('http://localhost:8080/test-1.0-SNAPSHOT/pages/home.xhtml');
    
  })


})