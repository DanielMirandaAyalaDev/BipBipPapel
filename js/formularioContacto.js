document.addEventListener('DOMContentLoaded', function () {


    //variable donde se obtiene  el id del fomulario
    const formulario = document.querySelector("#formularioContacto");


    formulario.addEventListener("submit", function (e) {
        //CReacion de variablels donde se obtienen los ids de los campos del formulario
        const inputMombre = document.querySelector('#inputNombre').value.trim();
        const inputCorreo = document.querySelector('#inputEmail').value.trim();
        const inputTelefono = document.querySelector("#inputTelefono").value.trim();
        const inputMensaje = document.querySelector("#inputMensaje").value.trim();

        // Validar campo vacíos
        if (inputMombre === "" || inputCorreo === "" || inputTelefono === "" || inputMensaje === "") {
            e.preventDefault(); // Detiene el envío del formulario
            mostrarAlerta("Por favor, completa los campos del formulario.", "error");
            return;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(inputMombre)) {
            e.preventDefault(); // Detiene el envío del formulario
            mostrarAlerta("el campo nombre, no acepta números", "error");
            return;
        }


        //  Validar formato de correo básico
        if (!inputCorreo.includes("@")) {
            e.preventDefault();
            mostrarAlerta("Por favor, ingresa un correo electrónico válido.", "error");
            return;
        } else if (!inputCorreo.includes(".")) {
            e.preventDefault();
            mostrarAlerta(`Por favor, al correo ${inputCorreo}, le hace falta dominio \n Ejemplo:nombre@ejemplo.com`, "error");
            return;
        }


        if (!/^\d+$/.test(inputTelefono)) {
            e.preventDefault();
            mostrarAlerta("el campo télefono solo acepta números", "error");
            return;
        } else if (inputTelefono.length >= 11) {
            e.preventDefault();
            mostrarAlerta("el campo télefono debe de ser de 10 dígitos", "error");
            return;
        }

        const mensaje = inputMensaje.split(/\s+/);
        if (mensaje.length >= 500) {
            e.preventDefault();
            mostrarAlerta("El campo mensaje no puede tener mas de 500 caráteres", "error");
            return;
        }

        e.preventDefault();

        mostrarAlerta("Formulario enviado con éxito", "info");
        formulario.reset();

    });


    function mostrarAlerta(mensaje, tipo) {
        const alerta = document.querySelector("#alertaCorrecta");
       
        console.log(tipo);
        if (tipo === "info") {
            alerta.innerHTML = `
            <div class="alert alert-success d-flex align-items-center" fade show role="alert">
            <strong>${mensaje}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
            </button>
            </div>`
          

        } else if (tipo === "error") {
            const alerta = document.querySelector("#alertaCorrecta");
            alerta.innerHTML = `<div class="alert alert-warning d-flex align-items-center" fade show role="alert">
            <strong>${mensaje}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
          
        }



    }
});
