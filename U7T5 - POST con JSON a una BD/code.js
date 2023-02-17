let formulario, iTitulo, iDirector, iCadena, iAnyo, iTerminada;
let xhr;
const READY_STATE_COMPLETE = 4;
const STATUS_OK = 200;

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

    let datos_json = `{"titulo":"${iTitulo.value}","director":"${iDirector.value}","cadena":"${iCadena.value}","anyo":${Number.parseInt(iAnyo.value)},"terminada":${iTerminada.checked}}`;
    datos_json = JSON.parse(datos_json);
    console.log(datos_json);

    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
        let url = "create_serie.php";

        xhr.onreadystatechange = tratarRespuesta;
        xhr.open("POST", url);
        xhr.send(datos_json);
    } else {
        alert("El navegador no soporta peticiones XHR");
    }
}

function tratarRespuesta() {
    if (xhr.readyState === READY_STATE_COMPLETE && xhr.status === STATUS_OK) {
        console.log("responseText", xhr.responseText);
    }
}