
// Insertar el id de los elementos del html
const btnDelete = document.getElementById("btnDelete");
const frase = document.getElementById("frase");


// Accion a realizar al cargar la página
window.addEventListener("load", function(event){
    if (this.localStorage.getItem("nombre") != null){
        frase.innerHTML = `Hola <strong>${this.localStorage.getItem("nombre")}</strong>, bienvenido/a de nuevo`
    }// FIN => if nombre != null
    else {frase.innerHTML = `<strong>Por favor regresa a la página de registor e ingresa tu nombre</strong>`
    } // FIN => else nombre
}) // => FIN window load


btnDelete.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.removeItem("nombre");
    location.href = "welcome.html"
})