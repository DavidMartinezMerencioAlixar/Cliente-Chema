const READY_STATE_COMPLETE = 4;
const HTTP_STATUS_OK = 200;
let tablaSeries;

window.addEventListener("load", inicio);

function inicio() {
    tablaSeries = document.getElementById("tablaSeries").children[0];
    cargarSeries();
}

function cargarSeries() {
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else {
        alert("El navegador actual no soporta AJAX");
        return;
    }

    if (peticion_http) {
        const URL = "http://localhost:8090/U7T4 - JSON/series.json";
        peticion_http.addEventListener("readystatechange", mostrarResultado);
        peticion_http.open("GET", URL);
        peticion_http.send();
    }
}

function mostrarResultado() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === HTTP_STATUS_OK) {
            let jsonDoc = JSON.parse(peticion_http.responseText);

            let listaSeries = jsonDoc.series;

            for (const serie of listaSeries) {
                let atributos = serie.serie;

                let titulo = atributos.titulo;
                let cadena = atributos.cadena;
                let director = atributos.director;
                let anio = atributos.anio;
                let terminada = atributos.terminada;

                let tr = document.createElement("tr");
                let tdTitulo = document.createElement("td");
                let tdCadena = document.createElement("td");
                let tdDirector = document.createElement("td");
                let tdAnio = document.createElement("td");
                let tdTerminada = document.createElement("td");
                let imgTerminada = document.createElement("img");

                tdTitulo.style.fontWeight = "bold";
                tdDirector.style.fontStyle = "italic";
                if (anio <= 2000) {
                    tdAnio.className = "rojo";
                } else if (anio >= 2001 && anio <= 2010) {
                    tdAnio.className = "amarillo";
                } else {
                    tdAnio.className = "verde";
                }
                if (terminada === "sí") {
                    imgTerminada.src = "./img/terminada.png";
                } else {
                    imgTerminada.src = "./img/no terminada.png";
                }

                tdTitulo.appendChild(document.createTextNode(titulo));
                tdCadena.appendChild(document.createTextNode(cadena));
                tdDirector.appendChild(document.createTextNode(director));
                tdAnio.appendChild(document.createTextNode(anio));
                tdTerminada.appendChild(imgTerminada);
                
                tr.appendChild(tdTitulo);
                tr.appendChild(tdCadena);
                tr.appendChild(tdDirector);
                tr.appendChild(tdAnio);
                tr.appendChild(tdTerminada);

                tablaSeries.appendChild(tr);
            }
        }
    }
}