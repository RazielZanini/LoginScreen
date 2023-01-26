function login(){
    e.preventdefault();
    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("password");
    
    if(usuario.value === "" || senha.value === ""){
        alert('Preencha os campos!')
    }
    else{
        location.href = "login.html";
        console.log('Login realizado com sucesso!');
    }
}   