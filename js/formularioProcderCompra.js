
document.addEventListener('DOMContentLoaded', function () {

    // Obtener el formulario
    const formulario = document.querySelector("#formularioCompra");

    // Verificar que exista el formulario
    if (!formulario) {
        console.error("No se encontró el formulario de compra.");
        return;
    }

    formulario.addEventListener("submit", function (e) {

        // Obtener los valores de los campos
        const inputNombre = document.querySelector("#nombrecompleto").value.trim();
        const inputCorreo = document.querySelector("#correo").value.trim();
        const inputTelefono = document.querySelector("#telefono").value.trim();
        const inputDireccion = document.querySelector("#direccion").value.trim();
        const inputCodigoPostal = document.querySelector("#codigoPostal").value.trim();

        // VALIDAR CAMPOS VACÍOS
        if (
            inputNombre === "" ||
            inputCorreo === "" ||
            inputTelefono === "" ||
            inputDireccion === "" ||
            inputCodigoPostal === ""
        ) {
            e.preventDefault();
            mostrarAlerta("Por favor, completa todos los campos de entrega.", "error");
            return;

        // VALIDAR NOMBRE
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/.test(inputNombre)) {
            e.preventDefault();
            mostrarAlerta("El campo nombre solo acepta letras.", "error");
            return;
        }

        // VALIDAR CORREO
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(inputCorreo)) {
            e.preventDefault();
            mostrarAlerta("Por favor, ingresa un correo electrónico válido.", "error");
            return;
        }

        // VALIDAR TELÉFONO
        if (!/^\d+$/.test(inputTelefono)) {
            e.preventDefault();
            mostrarAlerta("El campo teléfono solo acepta números.", "error");
            return;
        } else if (inputTelefono.length !== 10) {
            e.preventDefault();
            mostrarAlerta("El teléfono debe contener exactamente 10 dígitos.", "error");
            return;
        }

        // VALIDAR DIRECCIÓN
        if (inputDireccion.length < 5) {
            e.preventDefault();
            mostrarAlerta("Por favor, ingresa una dirección de entrega válida.", "error");
            return;
        }

        // VALIDAR CÓDIGO POSTAL
        if (!/^\d{5}$/.test(inputCodigoPostal)) {
            e.preventDefault();
            mostrarAlerta("El código postal debe contener exactamente 5 dígitos.", "error");
            return;
        }

        // DETENER ENVÍO PORQUE TODAVÍA NO HAY BACKEND
        e.preventDefault();

        mostrarAlerta("¡Tus datos de entrega son correctos!", "info");

    });


    // FUNCIÓN PARA MOSTRAR ALERTAS
    function mostrarAlerta(mensaje, tipo) {

        const alerta = document.querySelector("#alertaCorrecta");

        if (!alerta) {
            console.error("No se encontró el contenedor de alertas.");
            return;
        }

        if (tipo === "info") {

            alerta.innerHTML = `
                <div class="alert alert-success d-flex align-items-center fade show" role="alert">
                    <strong>${mensaje}</strong>
                    <button type="button" class="btn-close"
                    data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;

        } else if (tipo === "error") {

            alerta.innerHTML = `
                <div class="alert alert-warning d-flex align-items-center fade show" role="alert">
                    <strong>${mensaje}</strong>
                    <button type="button" class="btn-close"
                    data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;

        }

    }

});
