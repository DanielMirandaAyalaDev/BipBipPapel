// Seleccionar el formulario de registro
const formulario = document.querySelector("form");


// Seleccionar los campos del formulario
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const terminos = document.getElementById("terminos");


// Detectar cuando se envía el formulario
formulario.addEventListener("submit", function(event) {

    // Evitar que la página se recargue
    event.preventDefault();

    // Capturar los valores escritos por el usuario
    const nombreUsuario = nombre.value.trim();
    const correoUsuario = email.value.trim();
    const contrasenaUsuario = contrasena.value;
    const aceptaTerminos = terminos.checked;

        // Validar nombre
    if (nombreUsuario === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    // Validar correo
    if (correoUsuario === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        return;
    }

    // Validar contraseña
    if (contrasenaUsuario.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    // Validar términos
    if (!aceptaTerminos) {
        alert("Debes aceptar los términos y la política.");
        return;
    }

    // Crear un objeto con los datos del usuario
    const usuario = {
        nombre: nombreUsuario,
        email: correoUsuario,
        contrasena: contrasenaUsuario,
        aceptaTerminos: aceptaTerminos
    };

    // Convertir el objeto a una cadena JSON
    const datosJSON = JSON.stringify(usuario);
    // Mostrar el JSON en la consola
    console.log("JSON generado correctamente:", datosJSON);

    // Mostrar mensaje de registro exitoso
    const mensajeRegistro = document.getElementById("mensajeRegistro");
    mensajeRegistro.style.display = "block";

});







