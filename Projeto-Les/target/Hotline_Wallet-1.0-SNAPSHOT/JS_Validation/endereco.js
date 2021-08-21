function validate(){
    
    var tel = document.getElementById("tel").value;
    var cep = document.getElementById("cep").value;
    var address = document.getElementById("address").value;
    var house_number = document.getElementById("house_number").value;
    var addon_address = document.getElementById("addon_address").value;
    var district = document.getElementById("district").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var nick = document.getElementById("nick").value;
    
    if ( tel == "" || cep == "" || address == "" || house_number == "" || addon_address == "" || district == "" || city == "" || state == "" || nick == ""){
        alert ("Campos Vazios");
        
        return false;
    }else if(!(/\d/g.test(house_number))){
        alert ("Somente numero no campo N° da Casa");
        return false;
    }else if(/\d/g.test(state)){
        alert ("Somente letra no campo estado");
        return false;
    }else if(/\d/g.test(city)){
        alert ("Somente letra no campo cidade");
        return false;
    }
    alert ("Endereço cadastrado com sucesso");
    window.location.href ="http://localhost:8080/test-1.0-SNAPSHOT/pages/clientes.xhtml" ; // Redirecting to other page.
    return true;
}
