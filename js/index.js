
// Insertar el id de los elementos del html
const btnSave = document.getElementById("btnSave");
const txtName = document.getElementById("Name");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");


// Declaración de variables
let isValid = true;
let datos = [];


// Poner listener al botón con una función
btnSave.addEventListener("click", function(event){
    event.preventDefault();
        // Acciones a realizar al tocar el botón
        txtName.style.border = ""
        alertValidacionesTexto.innerHTML = "";
        alertValidaciones.style.display = "none";
        isValid = true;

    //Validación del campo introducido
    if (txtName.value.length == 0){
        txtName.style.border = "solid red medium"
        alertValidacionesTexto.innerHTML += "El <strong>Nombre</strong> introducido no es válido.</br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } // => FIN ! validar


    //Si se cumplen los requerimientos, realizar:
    if (isValid){
        // Guardar el nombre en localStorage
        // localStorage.setItem("name", txtName)
        localStorage.setItem("nombre", txtName.value);
        // Reiniciar los valores
        txtName.value = "";
        txtName.focus();
    } // => FIN isValid

}) // FIN => addEventListener de btnSave
