function validate(){
    var old_pass = document.getElementById("old_pass").value;
    var new_pass = document.getElementById("new_pass").value;
    var new_pass_confirm = document.getElementById("new_pass_confirm").value
    
    if ( old_pass == "" || new_pass == "" || new_pass_confirm == ""){
        alert ("Campos Vazios");
        return false;
    }else if(old_pass!="1234"){
        alert ("Senha atual incorreta");
        return false;
    }else if(new_pass!=new_pass_confirm){
        alert ("Nova senha e sua confirmação estão diferentes");
        return false;
    }else if(new_pass==old_pass){
        alert ("Nova senha e senha atual são iguais");
        return false;
    }
    alert ("senha alterada com sucesso");
    window.location.href ="http://localhost:8080/test-1.0-SNAPSHOT/pages/clientes.xhtml" ; // Redirecting to other page.
    return true;
}
