let ventas = document.getElementById("ventas").value;
let fecha = document.getElementById("fecha").value;
let ingresos = document.getElementById("ingresos").value;
let egresos = document.getElementById("egresos").value;
let concepto = document.getElementById("concepto").value;
let valor = document.getElementById("valor").value;

function ValidarVentas(){
    if(ventas == '' || ingresos == '' || egresos == '' || concepto == '' || valor == '')
        console.log("Los campos están vacíos")
    else{
    if(ventas != /[1-9]/){
        console.log('Los datos son incorrectos')
    }

    if(ingresos != /[1-9]/){
        console.log('Los datos son incorrectos')
    }

    if(egresos != /[1-9]/){
        console.log('Los datos son incorrectos')
    }

    if(concepto != /[a-zA-Z]/){
        console.log('Los datos son incorrectos')
    }

    if(valor != /[1-9]/){
        console.log('Los datos son incorrectos')
    }
    }
}