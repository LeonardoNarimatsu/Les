function validate(){
    var cardname = document.getElementById("cardname").value;
    var cardnumber = document.getElementById("cardnumber").value;
    var validade = document.getElementById("validade").value;
    var cvv = document.getElementById("cvv").value;
    var cpf = document.getElementById("cpf").value;
    
    if ( cardname == "" || cardnumber == "" || validade == "" || cvv == "" || cpf == ""){
        alert ("Campos Vazios");
        return false;
    }else if(!(/\d/g.test(cvv))){
        alert ("Somente números no campo de cvv");
        return true;
    }else if(/\d/g.test(cardname)){
        alert ("Somente letras no campo de nome");
        return true;
    }
    alert ("cadastrado com sucesso");
    window.location.href ="http://localhost:8080/test-1.0-SNAPSHOT/pages/clientes.xhtml" ; // Redirecting to other page.
    return true;
}