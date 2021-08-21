const driver = require('../driver');

// Checar se ele esta na tela inicial do sistema
// Procurar botao de Profile
// Checar se ele existe
// Clicar no botao
// Verificar se ta na tela de formulariop
// Escrever no formuario login e senha
// clicar nobotao de entrar
// Verificar se ele entrou na tela inicial de um usuario loggado
describe('Testing register card', () => {
  beforeAll(async () => {
    await driver;
    await driver.get("http://localhost:8080/test-1.0-SNAPSHOT/pages/endereco.xhtml");
  }, 10000);

//  afterAll(async () => {
//    await driver.quit();
//  }, 10000);

  test('Checking Title', async () => {
    const title = await driver.getTitle();
    // title = 'Titulo da pagina'
    expect(title).toBe('Endereço');
    
  })
    
    
    
  

  test('Edit Address empty', async () => {
    
    const inputtel = await driver.findElement({ id: 'tel' });
    const inputcep = await driver.findElement({ id: 'cep' });
    const inputaddress = await driver.findElement({ id: 'address' });
    const inputhouse_number = await driver.findElement({ id: 'house_number' });
    const inputaddon_address = await driver.findElement({ id: 'addon_address' });
    const inputdistrict = await driver.findElement({ id: 'district' });
    const inputcity = await driver.findElement({ id: 'city' });
    const inputstate = await driver.findElement({ id: 'state' });
    const inputnick = await driver.findElement({ id: 'nick' });
    const inputsave = await driver.findElement({ id: 'save' });


            
    await inputtel.clear();
    await inputcep.clear();
    await inputaddress.clear();
    await inputhouse_number.clear();
    await inputaddon_address.clear();
    await inputdistrict.clear();
    await inputcity.clear();
    await inputstate.clear();
    await inputnick.clear();


    //Salvar endereço
    const inputsaveDisplayed = await inputsave.isDisplayed();
    expect(inputsaveDisplayed).toBe(true);

    await inputsave.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("Campos Vazios"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup

    
  })

  test('Edit Address letter on number', async () => {
    
    const inputtel = await driver.findElement({ id: 'tel' });
    const inputcep = await driver.findElement({ id: 'cep' });
    const inputaddress = await driver.findElement({ id: 'address' });
    const inputhouse_number = await driver.findElement({ id: 'house_number' });
    const inputaddon_address = await driver.findElement({ id: 'addon_address' });
    const inputdistrict = await driver.findElement({ id: 'district' });
    const inputcity = await driver.findElement({ id: 'city' });
    const inputstate = await driver.findElement({ id: 'state' });
    const inputnick = await driver.findElement({ id: 'nick' });
    const inputsave = await driver.findElement({ id: 'save' });

    
    
            
    //Digitar telefone
    const inputtelDisplayed = await inputtel.isDisplayed();
    expect(inputtelDisplayed).toBe(true);

    await inputtel.sendKeys("11995010203");

    //Digitar CEP
    const inputcepDisplayed = await inputcep.isDisplayed();
    expect(inputcepDisplayed).toBe(true);

    await inputcep.sendKeys("07500000");

    //Digitar Endereco
    const inputaddressDisplayed = await inputaddress.isDisplayed();
    expect(inputaddressDisplayed).toBe(true);

    await inputaddress.sendKeys("Rua Antonio");

    //Digitar numero
    const inputhouse_numberDisplayed = await inputhouse_number.isDisplayed();
    expect(inputhouse_numberDisplayed).toBe(true);

    await inputhouse_number.sendKeys("leo");
    
    //Digitar complemento
    const inputaddon_addressDisplayed = await inputaddon_address.isDisplayed();
    expect(inputaddon_addressDisplayed).toBe(true);

    await inputaddon_address.sendKeys("A");

    //Digitar bairro
    const inputdistrictDisplayed = await inputdistrict.isDisplayed();
    expect(inputdistrictDisplayed).toBe(true);

    await inputdistrict.sendKeys("Eldorado");

    //Digitar cidade
    const inputcityDisplayed = await inputcity.isDisplayed();
    expect(inputcityDisplayed).toBe(true);

    await inputcity.sendKeys("Mogi das Cruzes");

    //Digitar estado
    const inputstateDisplayed = await inputstate.isDisplayed();
    expect(inputstateDisplayed).toBe(true);

    await inputstate.sendKeys("SP");

    //Digitar Apelido
    const inputnickDisplayed = await inputnick.isDisplayed();
    expect(inputnickDisplayed).toBe(true);

    await inputnick.sendKeys("Casa");

    //Salvar Cartão
    const inputsaveDisplayed = await inputsave.isDisplayed();
    expect(inputsaveDisplayed).toBe(true);

    await inputsave.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("Somente numero no campo N° da Casa"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup

    await inputtel.clear();
    await inputcep.clear();
    await inputaddress.clear();
    await inputhouse_number.clear();
    await inputaddon_address.clear();
    await inputdistrict.clear();
    await inputcity.clear();
    await inputstate.clear();
    await inputnick.clear();
    

    
  })

  test('Edit Address number on city', async () => {
    
    const inputtel = await driver.findElement({ id: 'tel' });
    const inputcep = await driver.findElement({ id: 'cep' });
    const inputaddress = await driver.findElement({ id: 'address' });
    const inputhouse_number = await driver.findElement({ id: 'house_number' });
    const inputaddon_address = await driver.findElement({ id: 'addon_address' });
    const inputdistrict = await driver.findElement({ id: 'district' });
    const inputcity = await driver.findElement({ id: 'city' });
    const inputstate = await driver.findElement({ id: 'state' });
    const inputnick = await driver.findElement({ id: 'nick' });
    const inputsave = await driver.findElement({ id: 'save' });

    
    
            
    //Digitar telefone
    const inputtelDisplayed = await inputtel.isDisplayed();
    expect(inputtelDisplayed).toBe(true);

    await inputtel.sendKeys("11995010203");

    //Digitar CEP
    const inputcepDisplayed = await inputcep.isDisplayed();
    expect(inputcepDisplayed).toBe(true);

    await inputcep.sendKeys("07500000");

    //Digitar Endereco
    const inputaddressDisplayed = await inputaddress.isDisplayed();
    expect(inputaddressDisplayed).toBe(true);

    await inputaddress.sendKeys("Rua Antonio");

    //Digitar numero
    const inputhouse_numberDisplayed = await inputhouse_number.isDisplayed();
    expect(inputhouse_numberDisplayed).toBe(true);

    await inputhouse_number.sendKeys("249");
    
    //Digitar complemento
    const inputaddon_addressDisplayed = await inputaddon_address.isDisplayed();
    expect(inputaddon_addressDisplayed).toBe(true);

    await inputaddon_address.sendKeys("A");

    //Digitar bairro
    const inputdistrictDisplayed = await inputdistrict.isDisplayed();
    expect(inputdistrictDisplayed).toBe(true);

    await inputdistrict.sendKeys("Eldorado");

    //Digitar cidade
    const inputcityDisplayed = await inputcity.isDisplayed();
    expect(inputcityDisplayed).toBe(true);

    await inputcity.sendKeys("4");

    //Digitar estado
    const inputstateDisplayed = await inputstate.isDisplayed();
    expect(inputstateDisplayed).toBe(true);

    await inputstate.sendKeys("SP");

    //Digitar Apelido
    const inputnickDisplayed = await inputnick.isDisplayed();
    expect(inputnickDisplayed).toBe(true);

    await inputnick.sendKeys("Casa");

    //Salvar Cartão
    const inputsaveDisplayed = await inputsave.isDisplayed();
    expect(inputsaveDisplayed).toBe(true);

    await inputsave.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("Somente letra no campo cidade"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup

    await inputtel.clear();
    await inputcep.clear();
    await inputaddress.clear();
    await inputhouse_number.clear();
    await inputaddon_address.clear();
    await inputdistrict.clear();
    await inputcity.clear();
    await inputstate.clear();
    await inputnick.clear();
    

    
  })

  test('Edit Address number on state', async () => {
    
    const inputtel = await driver.findElement({ id: 'tel' });
    const inputcep = await driver.findElement({ id: 'cep' });
    const inputaddress = await driver.findElement({ id: 'address' });
    const inputhouse_number = await driver.findElement({ id: 'house_number' });
    const inputaddon_address = await driver.findElement({ id: 'addon_address' });
    const inputdistrict = await driver.findElement({ id: 'district' });
    const inputcity = await driver.findElement({ id: 'city' });
    const inputstate = await driver.findElement({ id: 'state' });
    const inputnick = await driver.findElement({ id: 'nick' });
    const inputsave = await driver.findElement({ id: 'save' });

    
    
            
    //Digitar telefone
    const inputtelDisplayed = await inputtel.isDisplayed();
    expect(inputtelDisplayed).toBe(true);

    await inputtel.sendKeys("11995010203");

    //Digitar CEP
    const inputcepDisplayed = await inputcep.isDisplayed();
    expect(inputcepDisplayed).toBe(true);

    await inputcep.sendKeys("07500000");

    //Digitar Endereco
    const inputaddressDisplayed = await inputaddress.isDisplayed();
    expect(inputaddressDisplayed).toBe(true);

    await inputaddress.sendKeys("Rua Antonio");

    //Digitar numero
    const inputhouse_numberDisplayed = await inputhouse_number.isDisplayed();
    expect(inputhouse_numberDisplayed).toBe(true);

    await inputhouse_number.sendKeys("249");
    
    //Digitar complemento
    const inputaddon_addressDisplayed = await inputaddon_address.isDisplayed();
    expect(inputaddon_addressDisplayed).toBe(true);

    await inputaddon_address.sendKeys("A");

    //Digitar bairro
    const inputdistrictDisplayed = await inputdistrict.isDisplayed();
    expect(inputdistrictDisplayed).toBe(true);

    await inputdistrict.sendKeys("Eldorado");

    //Digitar cidade
    const inputcityDisplayed = await inputcity.isDisplayed();
    expect(inputcityDisplayed).toBe(true);

    await inputcity.sendKeys("Mogi das Cruzes");

    //Digitar estado
    const inputstateDisplayed = await inputstate.isDisplayed();
    expect(inputstateDisplayed).toBe(true);

    await inputstate.sendKeys("4");

    //Digitar Apelido
    const inputnickDisplayed = await inputnick.isDisplayed();
    expect(inputnickDisplayed).toBe(true);

    await inputnick.sendKeys("Casa");

    //Salvar Cartão
    const inputsaveDisplayed = await inputsave.isDisplayed();
    expect(inputsaveDisplayed).toBe(true);

    await inputsave.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("Somente letra no campo estado"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup

    await inputtel.clear();
    await inputcep.clear();
    await inputaddress.clear();
    await inputhouse_number.clear();
    await inputaddon_address.clear();
    await inputdistrict.clear();
    await inputcity.clear();
    await inputstate.clear();
    await inputnick.clear();
    

    
  })

  

  test('Edit Address Success', async () => {
    
    const inputtel = await driver.findElement({ id: 'tel' });
    const inputcep = await driver.findElement({ id: 'cep' });
    const inputaddress = await driver.findElement({ id: 'address' });
    const inputhouse_number = await driver.findElement({ id: 'house_number' });
    const inputaddon_address = await driver.findElement({ id: 'addon_address' });
    const inputdistrict = await driver.findElement({ id: 'district' });
    const inputcity = await driver.findElement({ id: 'city' });
    const inputstate = await driver.findElement({ id: 'state' });
    const inputnick = await driver.findElement({ id: 'nick' });
    const inputsave = await driver.findElement({ id: 'save' });
    //const inputcountry = await driver.findElement({ id: 'country' });
    


    await inputtel.clear();
    await inputcep.clear();
    await inputaddress.clear();
    await inputhouse_number.clear();
    await inputaddon_address.clear();
    await inputdistrict.clear();
    await inputcity.clear();
    await inputstate.clear();
    await inputnick.clear();
    
   
    
    //Escolher Pais
    //const inputcountrylDisplayed = await inputcountry.isDisplayed();
    //expect(inputcountrylDisplayed).toBe(true);

    //await inputcountry.click();
    //await inputcountry.sendKeys("12");
            
    //Digitar telefone
    const inputtelDisplayed = await inputtel.isDisplayed();
    expect(inputtelDisplayed).toBe(true);

    await inputtel.sendKeys("11995010203");

    //Digitar CEP
    const inputcepDisplayed = await inputcep.isDisplayed();
    expect(inputcepDisplayed).toBe(true);

    await inputcep.sendKeys("07500000");

    //Digitar Endereco
    const inputaddressDisplayed = await inputaddress.isDisplayed();
    expect(inputaddressDisplayed).toBe(true);

    await inputaddress.sendKeys("Rua Antonio");

    //Digitar numero
    const inputhouse_numberDisplayed = await inputhouse_number.isDisplayed();
    expect(inputhouse_numberDisplayed).toBe(true);

    await inputhouse_number.sendKeys("189");
    
    //Digitar complemento
    const inputaddon_addressDisplayed = await inputaddon_address.isDisplayed();
    expect(inputaddon_addressDisplayed).toBe(true);

    await inputaddon_address.sendKeys("A");

    //Digitar bairro
    const inputdistrictDisplayed = await inputdistrict.isDisplayed();
    expect(inputdistrictDisplayed).toBe(true);

    await inputdistrict.sendKeys("Eldorado");

    //Digitar cidade
    const inputcityDisplayed = await inputcity.isDisplayed();
    expect(inputcityDisplayed).toBe(true);

    await inputcity.sendKeys("Mogi das Cruzes");

    //Digitar estado
    const inputstateDisplayed = await inputstate.isDisplayed();
    expect(inputstateDisplayed).toBe(true);

    await inputstate.sendKeys("SP");

    //Digitar Apelido
    const inputnickDisplayed = await inputnick.isDisplayed();
    expect(inputnickDisplayed).toBe(true);

    await inputnick.sendKeys("Casa");

    //Salvar Cartão
    const inputsaveDisplayed = await inputsave.isDisplayed();
    expect(inputsaveDisplayed).toBe(true);

    await inputsave.click();

    const alert = await driver.switchTo().alert();
    expect(await alert.getText()).toBe("Endereço cadastrado com sucesso"); //Print  await Alert popup
    await alert.accept(); //Close Alert popup

    
  })

  test('Test card Complete', async () => {
    const url = await driver.getCurrentUrl();
    
    expect(url).toBe('http://localhost:8080/test-1.0-SNAPSHOT/pages/clientes.xhtml');
    
  })


  


    
})