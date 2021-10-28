var DatosPerfil = [];
// Esta funcion recibe la informacion de el html con sus id y lo almacena en conjunto con la funcion GuardadDatos() en local Storage
function AgregarDatos(name, lastname, age, phone, mail) {
    var profile = {
        dName: name,
        dApellido: lastname,
        dAge: age,
        dPhone: phone,
        dMail: mail
    };
    DatosPerfil.push(profile);
    storage(DatosPerfil);
}

var btn = document.getElementById("saveData");

btn.addEventListener("click", GuardarDatos)


//Esta funcion es la que trae mendiente los imput la informacion y con la funcion AgregarDatos para almacenarlos.
//la funcion Storage() es la que se encarga de guardar los datos de la lista
function GuardarDatos() {
    var dataName = document.querySelector('#name').value;
    var dataApellido = document.querySelector('#apellido').value;
    var dataAge = document.querySelector('#age').value;
    var dataPhone = document.querySelector('#phone').value;
    var dataMail = document.querySelector('#mail').value;

    AgregarDatos(dataName, dataApellido, dataAge, dataPhone, dataMail);

}
function storage(list) {
    localStorage.setItem("profileList", JSON.stringify(list));
}

var parseLocal = JSON.parse(localStorage.getItem("profileList"));
if (localStorage.length !== 0) {

    for (let i = 0; i < parseLocal.length; i++) {
        data = parseLocal[i];
        var dataName = document.querySelector('#name').value = parseLocal[i].dName
        var dataApellido = document.querySelector('#apellido').value = parseLocal[i].dApellido
        var dataAge = document.querySelector('#age').value = parseLocal[i].dAge
        var dataPhone = document.querySelector('#phone').value = parseLocal[i].dPhone
        var dataMail = document.querySelector('#mail').value = parseLocal[i].dMail

        

    }

}



