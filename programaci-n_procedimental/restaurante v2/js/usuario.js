let nombre_usuario = document.getElementById("nombre_usuario").value;
let apellido = document.getElementById("apellido").value;
let documento = document.getElementById("documento").value;
let num_doc = document.getElementById("num_doc").value;
let telefono = document.getElementById("telefono").value;
let correo = document.getElementById("correo").value;
let gen_fem = document.querySelector('input[name="gen_fem"]:checked').value;
let gen_mas = document.querySelector('input[name="gen_mas"]:checked').value;
let gen_otro = document.querySelector('input[name="gen_otro"]:checked').value;
let cargo = document.getElementById("cargo").value;
let fecha_nacimi = document.getElementById("fecha_nacimi").value;
let contrasena = document.getElementById("contrasena").value;

function ValidarDatos(){
    if(nombre_usuario == '' || apellido == '' || num_doc == '' || telefono == '' || correo == '' || contrasena == '')
        console.log("Los campos están vacíos")
    else{
    if(nombre_usuario != /[a-zA-Z]/){
        console.log('Los datos son incorrectos')
    }

    if(apellido != /[a-zA-Z]/){
        console.log('Los datos son incorrectos')
    }

    if(num_doc.length >= 10){
        console.log('Los datos son incorrectos')
    }

    if(correo != /[a-zA-Z-@]/){
        console.log('Los datos son incorrectos')
    }

    if(contraseña != /[a-zA-Z]/)

    if(telefono.length() >= 10){
        console.log('Los datos son incorrectos')
    }
}
}