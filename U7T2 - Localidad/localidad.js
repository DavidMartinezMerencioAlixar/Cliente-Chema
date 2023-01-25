window.addEventListener("load", inicio);
let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
let inp, btn, divResultado, peticion_http;

function inicio() {
    inp = document.getElementById("inp");
    btn = document.getElementById("btn");
    divResultado = document.getElementById("resultado");

    btn.addEventListener("click", comprobarCiudad);
}

function comprobarCiudad() {
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else {
        alert("No tienes soporte para AJAX");
        return;  // Salimos y no hacemos la petición
    }
    // Preparamos la petición
    if (peticion_http) {
        const URL = "http://localhost:8090/U7T2 - Localidad/localidad.php?localidad="+inp.value;
        // En la petición, me suscribo al evento "ReadyStateChange", y le 
        // digo que me llame a muestra_contenido cada vez que suceda (que cambie el estado)
        peticion_http.onreadystatechange = mostrarResultado;
        peticion_http.open("GET", URL);
        peticion_http.send();
    }
}

function mostrarResultado() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === HTTP_STATUS_OK) {
            divResultado.textContent = peticion_http.responseText
            if (peticion_http.responseText === "SI") {
                divResultado.style.color = "green";
            } else {
                divResultado.style.color = "red";
            }
        }
    }
}
