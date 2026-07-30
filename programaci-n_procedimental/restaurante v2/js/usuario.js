    function ValidarUsuario() {

    let nombre_usuario = document.getElementById("nombre_usuario").value;
    let apellido = document.getElementById("apellido").value;
    let documento = document.getElementById("documento").value;
    let num_doc = document.getElementById("num_doc").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let cargo = document.getElementById("cargo").value;
    let fecha_nacimi = document.getElementById("fecha_nacimi").value;
    let contrasena = document.getElementById("contrasena").value;
    let generoEl = document.querySelector('input[name="genero"]:checked');

    if (nombre_usuario === "" || apellido === "" || num_doc === "" || telefono === "" || correo === "" || contrasena === "" || fecha_nacimi === "" || !generoEl) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "Los campos están vacíos. Por favor complete todos los datos.",
        });
        return;
    }

    if (!/^[a-zA-Z]+$/.test(nombre_usuario)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "El nombre debe contener letras.",
        });
        return;
    }

    if (!/^[a-zA-Z]+$/.test(apellido)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "El apellido debe contener letras.",
        });
        return;
    }

    if (!/^[0-9]+$/.test(num_doc)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "El número de documento debe contener números.",
        });
        return;
    }

    if (!/^[0-9]+$/.test(telefono) || telefono.length < 10) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "El teléfono debe contener números y tener al menos 10 dígitos.",
        });
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "El correo electrónico no es válido.",
        });
        return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(contrasena)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "La contraseña contiene caracteres inválidos.",
        });
        return;
    }

    Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "El usuario se ha registrado correctamente.",
    });
    return;
}

document.getElementById("enviar").onclick = ValidarUsuario;