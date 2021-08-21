const driver = require('../driver');

// Checar se ele esta na tela inicial do sistema
// Procurar botao de Profile
// Checar se ele existe
// Clicar no botao
// Verificar se ta na tela de formulario
// Escrever no formuario login e senha
// clicar nobotao de entrar
// Verificar se ele entrou na tela inicial de um usuario loggado
describe('Testing register card', () => {
  beforeAll(async () => {
    await driver;
    await driver.get("http://localhost:8080/test-1.0-SNAPSHOT/pages/cartao.xhtml");
  }, 10000);

//  afterAll(async () => {
//    await driver.quit();
//  }, 10000);

  test('Checking Title', async () => {
    const title = await driver.getTitle();
    // title = 'Titulo da pagina'
    expect(title).toBe('Cartao');
    
  })

  test('Register Card Empty input', async () => {
    const inputcardnumber = await driver.findElement({ id: 'cardnumber' });
    const inputcardname = await driver.findElement({ id: 'cardname' });
    const inputvalidade = await driver.findElement({ id: 'validade' });
    const inputcvv = await driver.findElement({ id: 'cvv' });
    const inputcpf = await driver.findElement({ id: 'cpf' });
    const inputcheck = await driver.findElement({ id: 'check' });
    const inputsave = await driver.findElement({ id: 'save' });


    //Digitar numero do cartão
    const inputcardnumberDisplayed = await inputcardnumber.isDisplayed();
    expect(inputcardnumberDisplayed).toBe(true);

    await inputcardnumber.sendKeys("");

    //Digitar nome do proprietario do cartão
    const inputcardnameDisplayed = await inputcardname.isDisplayed();
    expect(inputcardnameDisplayed).toBe(true);

    await inputcardname.sendKeys("");

    //Digitar data da validade
    const inputvalidadeDisplayed = await inputvalidade.isDisplayed();
    expect(inputvalidadeDisplayed).toBe(true);

    await inputvalidade.sendKeys("");

    //Digitar CVV
    const inputcvvDisplayed = await inputcvv.isDisplayed();
    expect(inputcvvDisplayed).toBe(true);

    await inputcvv.sendKeys("");

    //Digitar cpf
    const inputcpfDisplayed = await inputcpf.isDisplayed();
    expect(inputcpfDisplayed).toBe(true);

    await inputcpf.sendKeys("");

    //Check Cartão favorito
    const inputcheckDisplayed = await inputcheck.isDisplayed();
    expect(inputcheckDisplayed).toBe(true);

    await inputcheck.click();

    //Salvar Cartão
    const inputsaveDisplayed = await inputsave.isDisplayed();
    expect(inputsaveDisplayed).toBe(true);

    await inputsave.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("Campos Vazios"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup

    
  })

  test('Register Card Letter on CVV', async () => {
    const inputcardnumber = await driver.findElement({ id: 'cardnumber' });
    const inputcardname = await driver.findElement({ id: 'cardname' });
    const inputvalidade = await driver.findElement({ id: 'validade' });
    const inputcvv = await driver.findElement({ id: 'cvv' });
    const inputcpf = await driver.findElement({ id: 'cpf' });
    const inputcheck = await driver.findElement({ id: 'check' });
    const inputsave = await driver.findElement({ id: 'save' });


    //Digitar numero do cartão
    const inputcardnumberDisplayed = await inputcardnumber.isDisplayed();
    expect(inputcardnumberDisplayed).toBe(true);

    await inputcardnumber.sendKeys("1234567891234567");

    //Digitar nome do proprietario do cartão
    const inputcardnameDisplayed = await inputcardname.isDisplayed();
    expect(inputcardnameDisplayed).toBe(true);

    await inputcardname.sendKeys("leonardo eiji");

    //Digitar data da validade
    const inputvalidadeDisplayed = await inputvalidade.isDisplayed();
    expect(inputvalidadeDisplayed).toBe(true);

    await inputvalidade.sendKeys("5555");

    //Digitar CVV
    const inputcvvDisplayed = await inputcvv.isDisplayed();
    expect(inputcvvDisplayed).toBe(true);

    await inputcvv.sendKeys("leo");

    //Digitar cpf
    const inputcpfDisplayed = await inputcpf.isDisplayed();
    expect(inputcpfDisplayed).toBe(true);

    await inputcpf.sendKeys("45678912365");

    //Check Cartão favorito
    const inputcheckDisplayed = await inputcheck.isDisplayed();
    expect(inputcheckDisplayed).toBe(true);

    await inputcheck.click();

    //Salvar Cartão
    const inputsaveDisplayed = await inputsave.isDisplayed();
    expect(inputsaveDisplayed).toBe(true);

    await inputsave.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("Somente números no campo de cvv"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup


    await inputcardnumber.clear();
    await inputcardname.clear();
    await inputvalidade.clear();
    await inputcvv.clear();
    await inputcpf.clear();
    
    

    
  })

  test('Register Card number on name', async () => {
    const inputcardnumber = await driver.findElement({ id: 'cardnumber' });
    const inputcardname = await driver.findElement({ id: 'cardname' });
    const inputvalidade = await driver.findElement({ id: 'validade' });
    const inputcvv = await driver.findElement({ id: 'cvv' });
    const inputcpf = await driver.findElement({ id: 'cpf' });
    const inputcheck = await driver.findElement({ id: 'check' });
    const inputsave = await driver.findElement({ id: 'save' });


    //Digitar numero do cartão
    const inputcardnumberDisplayed = await inputcardnumber.isDisplayed();
    expect(inputcardnumberDisplayed).toBe(true);

    await inputcardnumber.sendKeys("1234567891234567");

    //Digitar nome do proprietario do cartão
    const inputcardnameDisplayed = await inputcardname.isDisplayed();
    expect(inputcardnameDisplayed).toBe(true);

    await inputcardname.sendKeys("456654");

    //Digitar data da validade
    const inputvalidadeDisplayed = await inputvalidade.isDisplayed();
    expect(inputvalidadeDisplayed).toBe(true);

    await inputvalidade.sendKeys("5555");

    //Digitar CVV
    const inputcvvDisplayed = await inputcvv.isDisplayed();
    expect(inputcvvDisplayed).toBe(true);

    await inputcvv.sendKeys("123");

    //Digitar cpf
    const inputcpfDisplayed = await inputcpf.isDisplayed();
    expect(inputcpfDisplayed).toBe(true);

    await inputcpf.sendKeys("45678912365");

    //Check Cartão favorito
    const inputcheckDisplayed = await inputcheck.isDisplayed();
    expect(inputcheckDisplayed).toBe(true);

    await inputcheck.click();

    //Salvar Cartão
    const inputsaveDisplayed = await inputsave.isDisplayed();
    expect(inputsaveDisplayed).toBe(true);

    await inputsave.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("Somente letras no campo de nome"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup

    await inputcardnumber.clear();
    await inputcardname.clear();
    await inputvalidade.clear();
    await inputcvv.clear();
    await inputcpf.clear();
    
    

    
  })

  


  

  test('Register Card Success', async () => {
    const inputcardnumber = await driver.findElement({ id: 'cardnumber' });
    const inputcardname = await driver.findElement({ id: 'cardname' });
    const inputvalidade = await driver.findElement({ id: 'validade' });
    const inputcvv = await driver.findElement({ id: 'cvv' });
    const inputcpf = await driver.findElement({ id: 'cpf' });
    const inputcheck = await driver.findElement({ id: 'check' });
    const inputsave = await driver.findElement({ id: 'save' });


    //Digitar numero do cartão
    const inputcardnumberDisplayed = await inputcardnumber.isDisplayed();
    expect(inputcardnumberDisplayed).toBe(true);

    await inputcardnumber.sendKeys("1234567891234567");

    //Digitar nome do proprietario do cartão
    const inputcardnameDisplayed = await inputcardname.isDisplayed();
    expect(inputcardnameDisplayed).toBe(true);

    await inputcardname.sendKeys("leonardo eiji");

    //Digitar data da validade
    const inputvalidadeDisplayed = await inputvalidade.isDisplayed();
    expect(inputvalidadeDisplayed).toBe(true);

    await inputvalidade.sendKeys("5555");

    //Digitar CVV
    const inputcvvDisplayed = await inputcvv.isDisplayed();
    expect(inputcvvDisplayed).toBe(true);

    await inputcvv.sendKeys("123");

    //Digitar cpf
    const inputcpfDisplayed = await inputcpf.isDisplayed();
    expect(inputcpfDisplayed).toBe(true);

    await inputcpf.sendKeys("45678912365");

    //Check Cartão favorito
    const inputcheckDisplayed = await inputcheck.isDisplayed();
    expect(inputcheckDisplayed).toBe(true);

    await inputcheck.click();

    //Salvar Cartão
    const inputsaveDisplayed = await inputsave.isDisplayed();
    expect(inputsaveDisplayed).toBe(true);

    await inputsave.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("cadastrado com sucesso"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup

    
  })


  test('Test card Complete', async () => {
    const url = await driver.getCurrentUrl();
    
    expect(url).toBe('http://localhost:8080/test-1.0-SNAPSHOT/pages/clientes.xhtml');
    
  })

  
  
    
})