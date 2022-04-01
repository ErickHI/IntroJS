/* alert("Hola mundo"); */

var nombre = "Erick Hernández";
let edad = 10;
let titulo = document.getElementById('titulo');

let mensaje = "Mi nombre es " + nombre + " y mi edad es: " + (edad+11);

console.log(mensaje);

titulo.innerHTML = mensaje;
titulo.style.color = "blue";
/* titulo.style.textTransform = "upperCase"; */
titulo.innerHTML = titulo.textContent.toUpperCase();
console.log(titulo.textContent.toLowerCase());

titulo.onclick = function() {
    alert("Hola");
    switch(titulo.style.color){
        case "blue":
            titulo.style.color = "purple";
            titulo.innerHTML = titulo.textContent.toLowerCase();
            break;
        case "purple":
            titulo.style.color = "blue";
            titulo.innerHTML = titulo.textContent.toUpperCase();
            break;
    }
}