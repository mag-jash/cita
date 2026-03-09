document.getElementById("formCita")?.addEventListener("submit", function(e){

e.preventDefault();

let nombre = document.getElementById("nombre").value;
let correo = document.getElementById("correo").value;
let psicologo = document.getElementById("psicologo").value;
let fecha = document.getElementById("fecha").value;
let hora = document.getElementById("hora").value;
let motivo = document.getElementById("motivo").value;

let cita = {
nombre,
correo,
psicologo,
fecha,
hora,
motivo
};

let citas = JSON.parse(localStorage.getItem("citas")) || [];

citas.push(cita);

localStorage.setItem("citas", JSON.stringify(citas));

alert("Cita registrada correctamente");

this.reset();

});
