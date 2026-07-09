function ValidarVentas(event) {
    if (event) event.preventDefault();

    let ventas = document.getElementById("ventas").value;
    let fecha = document.getElementById("fecha").value;
    let ingresos = document.getElementById("ingresos").value;
    let egresos = document.getElementById("egresos").value;
    let concepto = document.getElementById("concepto").value;
    let valor = document.getElementById("valor").value;

    if (ventas === "" || fecha === "" || ingresos === "" || egresos === "" || concepto === "" || valor === "") {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "Los campos están vacíos. Por favor complete todos los datos.",
        });
        return;
    }

    if (!/^[0-9]+$/(ventas)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "El número de ventas debe contener números.",
        });
        return;
    }

    if (!/^[0-9]+$/(ingresos)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "Los ingresos deben contener números.",
        });
        return;
    }

    if (!/^[0-9]+$/(egresos)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "Los egresos deben contener números.",
        });
        return;
    }

    if (!/^[a-zA-Z][0-9]+$/(concepto)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "El concepto debe tiene caracteres inválidos.",
        });
        return;
    }

    if (!/^[0-9]+$/(valor)) {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "El valor debe contener números.",
        });
        return;
    }

    Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: "El registro se ha agregado correctamente.",
    });
}

document.getElementById("contabilidadForm").addEventListener("submit", ValidarVentas);