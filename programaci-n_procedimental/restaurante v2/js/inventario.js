let codigo_produc = document.getElementById("codigo_producto").value;
let nombre_produc = document.getElementById("nombre_producto").value;
let cantidad = document.getElementById("cantidad").value;
let marca_produc = document.getElementById("marca_producto").value;

function ValidarVentas(){
    if(codigo_produc == '' || nombre_produc == '' || cantidad == '' || marca_produc == '')
        console.log("Los campos están vacíos")
    else{
    if(codigo_produc != /[1-9]/){
        console.log('Los datos son incorrectos')
    }

    if(nombre_produc != /[a-zA-Z]/){
        console.log('Los datos son incorrectos')
    }

    if(cantidad != /[1-9]/){
        console.log('Los datos son incorrectos')
    }

    if(marca_produc != /[a-zA-Z]/){
        console.log('Los datos son incorrectos')
    }
}
}