const READY_STATE_COMPLETE = 4;
const HTTP_STATUS_OK = 200;

window.addEventListener("load", inicio);

function inicio() {
    tablaSeries = document.getElementById("tablaSeries");
    cargarSeries();
}

function cargarSeries() {
    const URL = "./backend/listar_series.php";

    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response  => {
        if (response.ok) return response.json();
    }).then(data => {
        mostrarResultado(data);
    }).catch(error => {
        console.log("Error al obtener la lista de series:", error);
    });
}

function mostrarResultado(listaSeries) {
    listaSeries.forEach(serie => {
        let atributos = serie;  

        let titulo = atributos.titulo;
        let cadena = atributos.cadena;
        let director = atributos.director;
        let anio = atributos.anyo;
        let terminada = atributos.terminada === "1";

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
        if (terminada === true) {
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
    });
}