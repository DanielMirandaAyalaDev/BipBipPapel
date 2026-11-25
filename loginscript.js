// Función para mostrar mensajes en pantalla
document.addEventListener('DOMContentLoaded', function () {

    const formulario = document.querySelector("#formularioLogin");

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        // Obtener los datos del formulario
        const email = document.querySelector("#IniciarSesion").value.trim();
        const password = document.querySelector("#passwordLogin").value.trim();

        // Llamar a la función de validación
        validarLogin(email, password);

    });


    // Función para validar el inicio de sesión
    function validarLogin(email, password) {

        // Validar campos vacíos
        if (email === "" || password === "") {

            mostrarAlerta("Por favor, completa los campos del formulario.", "error");
            return;

        }

        // Validar correo electrónico
        if (!email.includes("@") || !email.includes(".")) {

            mostrarAlerta("Ingresa un correo electrónico válido.", "error");
            return;

        }

        // Validar contraseña
        if (password.length > 15) {

            mostrarAlerta("La contraseña no debe superar los 15 caracteres.", "error");
            return;

        }

        // Si las validaciones son correctas
        mostrarAlerta("Inicio de sesión validado correctamente.", "info");

        formulario.reset();

    }


    // Función para mostrar mensajes
    function mostrarAlerta(mensaje, tipo) {

        const contenedor = document.querySelector("#contenedorAlertas");

        if (tipo === "info") {

            contenedor.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>${mensaje}</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
                </div>
            `;

        } else if (tipo === "error") {

            contenedor.innerHTML = `
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>${mensaje}</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
                </div>
            `;

        }

    }

});
