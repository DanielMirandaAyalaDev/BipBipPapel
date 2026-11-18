document.addEventListener('DOMContentLoaded', function () {
    const inputMombre = document.querySelector('#inputNombre');
    const inputCorreo = document.querySelector('#inputEmail');
    const formulario = document.querySelector("formularioContacto");

    inputMombre.addEventListener('blur', validar);
    inputCorreo.addEventListener('blur', validar);

    function validar(e) {
        if (e.target.value.trim() === "") {
            console.log("Esta vacio!")
            mostrarAlerta();
        } else {
            console.log("si hay hay algo");
        }
    }

    function mostrarAlerta() {
        console.log("Hubo un error");
        const error = document.createElement('P');
        console.log(error);
        error.textContent = 'Hubo un error';
        error.classList.add('Error en el campo');
        formulario.appendChild(error);

    }
});
