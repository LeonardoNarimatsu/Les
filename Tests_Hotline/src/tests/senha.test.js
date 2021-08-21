const driver = require('../driver');

// Checar se ele esta na tela inicial do sistema
// Procurar botao de Profile
// Checar se ele existe
// Escrever no formuario login e senha
// clicar nobotao de entrar
// Verificar se ele entrou na tela inicial de um usuario loggado
describe('Testing register card', () => {
  beforeAll(async () => {
    await driver;
    await driver.get("http://localhost:8080/test-1.0-SNAPSHOT/pages/senha-editar.xhtml");
  }, 10000);

//  afterAll(async () => {
//    await driver.quit();
//  }, 10000);

  test('Checking Title', async () => {
    const title = await driver.getTitle();
    // title = 'Titulo da pagina'
    expect(title).toBe('Alterar Senha');
    
  })

  test('Change Password empty input', async () => {
    const inputold_pass = await driver.findElement({ id: 'old_pass' });
    const inputnew_pass = await driver.findElement({ id: 'new_pass' });
    const new_pass_confirm = await driver.findElement({ id: 'new_pass_confirm' });
    const btn = await driver.findElement({ id: 'alt' });

    //Inserir Senha Antiga
    const inputold_passDisplayed = await inputold_pass.isDisplayed();
    expect(inputold_passDisplayed).toBe(true);

    await inputold_pass.sendKeys("");

    //Inserir Senha nova
    const inputnew_passDisplayed = await inputnew_pass.isDisplayed();
    expect(inputnew_passDisplayed).toBe(true);

    await inputnew_pass.sendKeys("");

    //Confirmar Senha nova
    const new_pass_confirmDisplayed = await new_pass_confirm.isDisplayed();
    expect(new_pass_confirmDisplayed).toBe(true);

    await new_pass_confirm.sendKeys("");

    const btnIsDisplayed = await btn.isDisplayed();
    expect(btnIsDisplayed).toBe(true);

    await btn.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("Campos Vazios"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup

  })

  test('Change Password confirm incorrect', async () => {
    const inputold_pass = await driver.findElement({ id: 'old_pass' });
    const inputnew_pass = await driver.findElement({ id: 'new_pass' });
    const new_pass_confirm = await driver.findElement({ id: 'new_pass_confirm' });
    const btn = await driver.findElement({ id: 'alt' });

    //Inserir Senha Antiga
    const inputold_passDisplayed = await inputold_pass.isDisplayed();
    expect(inputold_passDisplayed).toBe(true);

    await inputold_pass.sendKeys("1234");

    //Inserir Senha nova
    const inputnew_passDisplayed = await inputnew_pass.isDisplayed();
    expect(inputnew_passDisplayed).toBe(true);

    await inputnew_pass.sendKeys("4321");

    //Confirmar Senha nova
    const new_pass_confirmDisplayed = await new_pass_confirm.isDisplayed();
    expect(new_pass_confirmDisplayed).toBe(true);

    await new_pass_confirm.sendKeys("9999");

    const btnIsDisplayed = await btn.isDisplayed();
    expect(btnIsDisplayed).toBe(true);

    await btn.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("Nova senha e sua confirmação estão diferentes"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup

    await inputold_pass.clear();
    await inputnew_pass.clear();
    await new_pass_confirm.clear();
    

  })

  test('Change Password new and old pass equal', async () => {
    const inputold_pass = await driver.findElement({ id: 'old_pass' });
    const inputnew_pass = await driver.findElement({ id: 'new_pass' });
    const new_pass_confirm = await driver.findElement({ id: 'new_pass_confirm' });
    const btn = await driver.findElement({ id: 'alt' });

    //Inserir Senha Antiga
    const inputold_passDisplayed = await inputold_pass.isDisplayed();
    expect(inputold_passDisplayed).toBe(true);

    await inputold_pass.sendKeys("1234");

    //Inserir Senha nova
    const inputnew_passDisplayed = await inputnew_pass.isDisplayed();
    expect(inputnew_passDisplayed).toBe(true);

    await inputnew_pass.sendKeys("1234");

    //Confirmar Senha nova
    const new_pass_confirmDisplayed = await new_pass_confirm.isDisplayed();
    expect(new_pass_confirmDisplayed).toBe(true);

    await new_pass_confirm.sendKeys("1234");

    const btnIsDisplayed = await btn.isDisplayed();
    expect(btnIsDisplayed).toBe(true);

    await btn.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("Nova senha e senha atual são iguais"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup

    await inputold_pass.clear();
    await inputnew_pass.clear();
    await new_pass_confirm.clear();
    

  })

  test('Change Password incorrect password', async () => {
    const inputold_pass = await driver.findElement({ id: 'old_pass' });
    const inputnew_pass = await driver.findElement({ id: 'new_pass' });
    const new_pass_confirm = await driver.findElement({ id: 'new_pass_confirm' });
    const btn = await driver.findElement({ id: 'alt' });

    //Inserir Senha Antiga
    const inputold_passDisplayed = await inputold_pass.isDisplayed();
    expect(inputold_passDisplayed).toBe(true);

    await inputold_pass.sendKeys("1111");

    //Inserir Senha nova
    const inputnew_passDisplayed = await inputnew_pass.isDisplayed();
    expect(inputnew_passDisplayed).toBe(true);

    await inputnew_pass.sendKeys("4321");

    //Confirmar Senha nova
    const new_pass_confirmDisplayed = await new_pass_confirm.isDisplayed();
    expect(new_pass_confirmDisplayed).toBe(true);

    await new_pass_confirm.sendKeys("4321");

    const btnIsDisplayed = await btn.isDisplayed();
    expect(btnIsDisplayed).toBe(true);

    await btn.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("Senha atual incorreta"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup

    await inputold_pass.clear();
    await inputnew_pass.clear();
    await new_pass_confirm.clear();

  })


  test('Change Password', async () => {
    const inputold_pass = await driver.findElement({ id: 'old_pass' });
    const inputnew_pass = await driver.findElement({ id: 'new_pass' });
    const new_pass_confirm = await driver.findElement({ id: 'new_pass_confirm' });
    const btn = await driver.findElement({ id: 'alt' });

    //Inserir Senha Antiga
    const inputold_passDisplayed = await inputold_pass.isDisplayed();
    expect(inputold_passDisplayed).toBe(true);

    await inputold_pass.sendKeys("1234");

    //Inserir Senha nova
    const inputnew_passDisplayed = await inputnew_pass.isDisplayed();
    expect(inputnew_passDisplayed).toBe(true);

    await inputnew_pass.sendKeys("4321");

    //Confirmar Senha nova
    const new_pass_confirmDisplayed = await new_pass_confirm.isDisplayed();
    expect(new_pass_confirmDisplayed).toBe(true);

    await new_pass_confirm.sendKeys("4321");

    const btnIsDisplayed = await btn.isDisplayed();
    expect(btnIsDisplayed).toBe(true);

    await btn.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("senha alterada com sucesso"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup

  })

  test('Test card Complete', async () => {
    const url = await driver.getCurrentUrl();
    
    expect(url).toBe('http://localhost:8080/test-1.0-SNAPSHOT/pages/clientes.xhtml');
    
  })
  
  
    
})