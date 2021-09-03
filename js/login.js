//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});

function  guardarUsuario(){
  let nombre = document.getElementById("userr").value;
  let password = document.getElementById("pass").value;
  if (nombre ===""){
    alert ("Ingrese un usuario valido");
    return false;
  } else if (password ==="") {
    alert ("Ingresar una contraseña valida");
    return false;
  } else {
  localStorage.setItem("nombreusuario",nombre);
  return true;
  }
  }