function ValidarInventario() {
    let codigo_produc = document.getElementById("codigo_producto").value;
    let nombre_produc = document.getElementById("nombre_producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let marca_produc = document.getElementById("marca_producto").value;

    if (codigo_produc == "" || nombre_produc == "" || cantidad == "" || marca_produc == "") {
        Swal.fire({
            icon: "error",
            title: "Algo salió mal",
            text: "No se encontraron datos. Por favor complete todos los datos.",
        });
    }
    else {
        if (!/^[0-9]+$/.test(codigo_produc)) {
            Swal.fire({
                icon: "error",
                title: "Algo salió mal",
                text: "El código del producto debe contener números.",
            });
            return;
        }

        if (!/^[a-zA-Z][0-9]+$/.test(nombre_produc)) {
            Swal.fire({
                icon: "error",
                title: "Algo salió mal",
                text: "El nombre del producto contiene caracteres inválidos.",
            });
            return;
        }

        if (!/^[0-9]+$/.test(cantidad)) {
            Swal.fire({
                icon: "error",
                title: "Algo salió mal",
                text: "La cantidad debe contener números.",
            });
            return;
        }

        if (!/^[a-zA-Z][0-9]+$/.test(marca_produc)) {
            Swal.fire({
                icon: "error",
                title: "Algo salió mal",
                text: "La marca del producto contiene caracteres inválidos.",
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "El producto se ha agregado correctamente.",
        });
    }

}

document.getElementById("guardar").onclick = ValidarInventario;