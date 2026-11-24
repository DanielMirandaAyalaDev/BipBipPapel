
// ======================================
//  MENSAJES UI (ALERTAS)
// ======================================

// Función para mostrar mensajes en pantalla
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector("#formularioRegistro");


    formulario.addEventListener("submit", function (e) {
       const inputNombre = document.querySelector('#nombre').value.trim();
       const inputMail = document.querySelector('#email').value.trim();
       const inputTelefono = document.querySelector('#telefono').value.trim();
       const inputPass = document.querySelector('#contrasena').value.trim();


          // Validar campo vacíos
        if (inputNombre === "" || inputMail === "" || inputTelefono === "" || inputPass === "") {
            e.preventDefault(); // Detiene el envío del formulario
            mostrarAlerta("Por favor, completa los campos del formulario.", "error");
            return;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(inputNombre)) {
            e.preventDefault(); // Detiene el envío del formulario
            mostrarAlerta(`el campo ${inputNombre}, no acepta números`, "error");
            return;
        }


        //  Validar formato de correo básico
        if (!inputMail.includes("@")) {
            e.preventDefault();
            mostrarAlerta("Por favor, ingresa un correo electrónico válido.", "error");
            return;
        } else if (!inputMail.includes(".")) {
            e.preventDefault();
            mostrarAlerta(`Por favor, al correo ${inputMail}, le hace falta dominio \n Ejemplo:nombre@ejemplo.com`, "error");
            return;
        }


        if (!/^\d+$/.test(inputTelefono)) {
            e.preventDefault();
            mostrarAlerta("el campo télefono solo acepta números", "error");
            return;
        } else if (inputTelefono.length >= 11) {
            e.preventDefault();
            mostrarAlerta(`el campo Télefono debe de ser de 10 dígitos`, "error");
            return;
        }
       
        if (inputPass.length >= 15) {
            e.preventDefault();
            mostrarAlerta("La contraseña debe de tener menos de 15 carácteres", "error");
            return;
        }
        
        e.preventDefault();
        mostrarAlerta("Formulario enviado con éxito", "info");
        formulario.reset();
    });

    
function mostrarAlerta(mensaje, tipo) {

    // 1. Obtener el contenedor de alertas
    const contenedor = document.querySelector("#contenedorAlertas");

    // 2. Limpiar mensajes anteriores
  //  contenedor.innerHTML = "";

        console.log(tipo);
        if (tipo === "info") {
            contenedor.innerHTML = `
            <div class="alert alert-success d-flex align-items-center" fade show role="alert">
            <strong>${mensaje}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
            </button>
            </div>`
          

        } else if (tipo === "error") {
            const contenedor = document.querySelector("#contenedorAlertas");
            contenedor.innerHTML = `<div class="alert alert-warning d-flex align-items-center" fade show role="alert">
            <strong>${mensaje}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
        }
    // 3. Crear un elemento HTML
   // const alerta = document.createElement("div");

    // 4. Asignar las clases de Bootstrap
    //alerta.className = `alert alert-${tipo} alert-dismissible fade show`;

    // 5. Asignar el mensaje
   // alerta.textContent = mensaje;

    // 6. Crear botón para cerrar la alerta
   // const botonCerrar = document.createElement("button");

   // botonCerrar.type = "button";
   // botonCerrar.className = "btn-close";
   // botonCerrar.setAttribute("data-bs-dismiss", "alert");
   // botonCerrar.setAttribute("aria-label", "Cerrar");

    // 7. Agregar el botón a la alerta
   // alerta.appendChild(botonCerrar);

    // 8. Mostrar la alerta en el HTML
   // contenedor.appendChild(alerta);
}

});

