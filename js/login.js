//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function setUser(){
    let user = document.getElementById("userr").value;
    localStorage.setItem("userr",user);
  }



  function guardarusuario(evento) {

    evento.preventDefault();
    var usuario = document.getElementById('userr').value;
    var clave = document.getElementById('password-field').value;

    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }else{
        if (clave.length < 6) {
            alert('La clave no es válida');
            return;
          }else{
            setUser();
            window.location.href = "home.html";
          }
    }
  }
