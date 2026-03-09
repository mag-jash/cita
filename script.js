function registrar(){

let nombre = document.getElementById("regNombre").value
let correo = document.getElementById("regCorreo").value
let pass = document.getElementById("regPassword").value

localStorage.setItem("nombre",nombre)
localStorage.setItem("correo",correo)
localStorage.setItem("password",pass)

alert("Registro exitoso")

}

function login(){

let correo = document.getElementById("loginCorreo").value
let pass = document.getElementById("loginPassword").value

let correoGuardado = localStorage.getItem("correo")
let passGuardado = localStorage.getItem("password")

if(correo==correoGuardado && pass==passGuardado){

window.location="agenda.html"

}else{

alert("Datos incorrectos")

}

}

window.onload = function(){

let nombre = localStorage.getItem("nombre")

if(document.getElementById("bienvenida")){

document.getElementById("bienvenida").innerHTML="Bienvenido "+nombre

document.getElementById("nombre").value = nombre
document.getElementById("correo").value = localStorage.getItem("correo")

}

}

function verificar(){

let nombre = document.getElementById("nombre").value
let correo = document.getElementById("correo").value
let fecha = document.getElementById("fecha").value
let hora = document.getElementById("hora").value
let motivo = document.getElementById("motivo").value

if(nombre=="" || correo=="" || fecha=="" || hora=="" || motivo==""){

alert("Por favor llena todos los campos")

}else{

alert("Cita agendada correctamente")

}

}
