
// ======================================
//  MENSAJES UI (ALERTAS)
// ======================================

// Función para mostrar mensajes en pantalla
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector("#formularioRegistro");
    
    formulario.addEventListener("submit", function (e) {
       const inputNombre = document.querySelector('#nombre')
       const inputMail = document.querySelector('#email')
       const inputTelefono = document.querySelector('#telefono')
       const inputPass = document.querySelector('#contrasena')
    });

    
function mostrarAlerta(mensaje, tipo) {

    // 1. Obtener el contenedor de alertas
    const contenedor = document.querySelector("#contenedorAlertas");

    // 2. Limpiar mensajes anteriores
  //  contenedor.innerHTML = "";


            console.log(tipo);
        if (tipo === "info") {
            alerta.innerHTML = `
            <div class="alert alert-success d-flex align-items-center" fade show role="alert">
            <strong>${mensaje}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
            </button>
            </div>`
          

        } else if (tipo === "error") {
            const alerta = document.querySelector("#contenedorAlertas");
            alerta.innerHTML = `<div class="alert alert-warning d-flex align-items-center" fade show role="alert">
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

