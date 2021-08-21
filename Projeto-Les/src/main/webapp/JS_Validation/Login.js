function validate(){
    var username = document.getElementById("mail").value;
    var password = document.getElementById("password").value;

    if (!username || !password || username == "" || password ==""){
        alert("Todos campos precisam ser preenchidos");
        
    }

    else if ( username == "leonardo" && password == "kayque"){
        window.location.href ="http://localhost:8080/test-1.0-SNAPSHOT/pages/home.xhtml" ; // Redirecting to other page.
        
    }

    else{
        alert ("Email ou Senha incorreta");
    }
    return false;
}
    