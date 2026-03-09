function login(){

let usuario = document.getElementById("usuario").value;
let password = document.getElementById("password").value;

if(usuario == "admin" && password == "1234"){

window.location = "index.html";

}else{

alert("Usuario o contraseña incorrectos");

}

}

function cita(){

alert("Tu cita ha sido registrada correctamente");

}