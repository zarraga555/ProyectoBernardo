function Login(){ 
     
    var usuario=document.login.usuario.value; 
    var password=document.login.password.value; 
    if (usuario=="vendedor" && password=="contraseña123") { 
    window.location="ventas.html"; 
    } 
    if (usuario=="admin" && password=="admin") { 
    window.location="gestion.html"; 
    }
    if (usuario=="contador" && password=="contador123") { 
    window.location="ventas.html"; 
    } 

    } 
    document.oncontextmenu = function(){return false}