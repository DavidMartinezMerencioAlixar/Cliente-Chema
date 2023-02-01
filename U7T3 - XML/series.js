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
        const URL = "http://localhost:8090/U7T3 - XML/series.xml";
        peticion_http.addEventListener("readystatechange", mostrarResultado);
        peticion_http.open("GET", URL);
        peticion_http.send();
    }
}

function mostrarResultado() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === HTTP_STATUS_OK) {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(peticion_http.responseText, "text/xml");

            let listaSeries = xmlDoc.children[0].children;

            for (const serie of listaSeries) {
                let atributos = serie.children;
                let titulo = atributos[0].textContent;
                let canal = atributos[1].textContent;
                let director = atributos[2].textContent;
                let anio = Number.parseInt(atributos[3].textContent);
                let terminada = atributos[4].textContent;

                let tr = document.createElement("tr");
                let tdTitulo = document.createElement("td");
                let tdCanal = document.createElement("td");
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
                    imgTerminada.src = "./terminada.png";
                } else {
                    imgTerminada.src = "./no terminada.png";
                }

                tdTitulo.appendChild(document.createTextNode(titulo));
                tdCanal.appendChild(document.createTextNode(canal));
                tdDirector.appendChild(document.createTextNode(director));
                tdAnio.appendChild(document.createTextNode(anio));
                tdTerminada.appendChild(imgTerminada);
                
                tr.appendChild(tdTitulo);
                tr.appendChild(tdCanal);
                tr.appendChild(tdDirector);
                tr.appendChild(tdAnio);
                tr.appendChild(tdTerminada);

                tablaSeries.appendChild(tr);
            }
        }
    }
}