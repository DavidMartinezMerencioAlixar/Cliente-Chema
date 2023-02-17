let formulario, iTitulo, iDirector, iCadena, iAnyo, iTerminada;
let xhr;
const READY_STATE_COMPLETE = 4;
const STATUS_OK = 200;
let divRespuesta = document.getElementById("respuesta");

window.addEventListener("load", iniciar);

function iniciar() {
    formulario = document.getElementById("formulario");
    iTitulo = document.getElementById("iTitulo");
    iDirector = document.getElementById("iDirector");
    iCadena = document.getElementById("iCadena");
    iAnyo = document.getElementById("iAnyo");
    iTerminada = document.getElementById("iTerminada");

    formulario.addEventListener("submit", enviarPeticion);
}

function enviarPeticion() {
    console.log("Enviar petición");

    let datos_json = {
        titulo: iTitulo.value,
        director: iDirector.value,
        cadena: iCadena.value,
        anyo: Number.parseInt(iAnyo.value),
        terminada: iTerminada.checked
    };
    console.log(datos_json);

    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
        const URL = "./create_serie.php";

        xhr.open("POST", URL);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = tratarRespuesta;

        xhr.send(JSON.stringify(datos_json));
    } else {
        alert("El navegador no soporta peticiones XHR");
    }
}

function tratarRespuesta() {
    if (xhr.readyState === READY_STATE_COMPLETE && xhr.status === STATUS_OK) {
        if (xhr.responseText === '"ok"') {
            divRespuesta.textContent = "ok";
            divRespuesta.style.color = "green";
        } else {
            divRespuesta.textContent = "No se ha podido insertar en la BD";
            divRespuesta.style.color = "red";
        }
    }
}