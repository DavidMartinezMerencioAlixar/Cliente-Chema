let formulario, iTitulo, iDirector, iCadena, iAnyo, iTerminada;

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
    let json = `{"titulo":"${iTitulo.value}","director":"${iDirector.value}","cadena":"${iCadena.value}","anyo":${Number.parseInt(iAnyo.value)},"terminada":${iTerminada.value}}`;
    json = JSON.parse(json);
    console.log(json);
}
