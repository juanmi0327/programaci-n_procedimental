let producto = document.getElementById("producto").value;
let usuario = document.getElementById("usuario").value;
let direccion = document.getElementById("direccion").value;
let telefono = document.getElementById("telefono").value;
let cantidad = document.getElementById("cantidad").value;
let metodo_pago = document.getElementById("metodo_pago").value;
let num_tarjeta = document.getElementById("num_tarjeta").value;
let vencimiento = document.getElementById("vencimiento").value;
let cvv = document.getElementById("cvv").value;

function ValidarVentas(){
    if(producto == '' || usuario == '' || direccion == '' || telefono == '' || cantidad == '' ||  num_tarjeta == '' || cvv == '')
        console.log("Los campos están vacíos")
    else{
    if(producto != /[a-zA-Z]/){
        console.log('Los datos son incorrectos')
    }

    if(usuario != /[a-zA-Z]/){
        console.log('Los datos son incorrectos')
    }

    if(direccion != /[a-zA-Z-1-9]/){
        console.log('Los datos son incorrectos')
    }

    if(telefono.length() >= 10 && telefono != /[1-9]/){
        console.log('Los datos son incorrectos')
    }

    if(cantidad != /[1-9]/){
        console.log('Los datos son incorrectos')
    }

    if(num_tarjeta != /[1-9]/){
        console.log('Los datos son incorrectos')
    }

    if(cvv.length() >= 3 && cvv != /[1-9]/){
        console.log('Los datos son incorrectos')
    }
}
}
