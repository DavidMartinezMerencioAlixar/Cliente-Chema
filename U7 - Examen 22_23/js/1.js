/**
 * @author David Martínez Merencio
 */

const API_BASE_URL = "https://gateway.marvel.com/";
const PRIVATE_API_KEY = "db2b3063a2238a31007347c40ad49e7f785bd259";
const PUBLIC_API_KEY = "b5abeaa992eb039451f6359b929f4d87";
const TS = "1000";
const HASH = md5(TS + PRIVATE_API_KEY + PUBLIC_API_KEY);

const READY_STATE_COMPLETE = 4;
const STATUS_OK = 200;
const URL_WEB = `${API_BASE_URL}/v1/public/characters?apikey=${PUBLIC_API_KEY}&hash=${HASH}&ts=${TS}&limit=10&offset=0`;
const URL_GET_DB = "./BD/get_marvel_characters.php";
const URL_SAVE_DB = "./BD/save_marvel_characters.php";
let btnCargarDeWeb, btnGuardarEnBD, btnCargarDeBD, btnLimpiar, contenedorTarjetas, trazas, xhr, datosWebCargados = false;

window.addEventListener("load", inicio);

function inicio() {
    btnCargarDeWeb = document.getElementById("btnCargarDeWeb");
    btnGuardarEnBD = document.getElementById("btnGuardarEnBD");
    btnCargarDeBD = document.getElementById("btnCargarDeBD");
    btnLimpiar = document.getElementById("btnLimpiar");
    contenedorTarjetas = document.getElementById("contenedorTarjetas");
    trazas = document.getElementById("trazas");

    btnCargarDeWeb.addEventListener("click", cargarDeWeb);
    btnGuardarEnBD.addEventListener("click", guardarEnBD_XHR);
    btnCargarDeBD.addEventListener("click", cargarDeBD_Fetch);
    btnLimpiar.addEventListener("click", limpiarTarjetas);
}

function cargarDeWeb() {
    fetch(URL_WEB
    ).then(response => {
        if (response.ok) return response.json();
    }).then(data => {
        let heroes = generarTarjetas(data.data.results);
        console.log("Datos cargados correctamente desde la Web");
        trazas.textContent = "Datos cargados correctamente desde la Web";
        btnGuardarEnBD.removeAttribute("disabled");
        return heroes;
    }).catch(error => {
        console.log("Error al cargar los datos de la web:", error);
    });
}

function cargarDeBD_Fetch() {
    fetch(URL_GET_DB
    ).then(response => {
        if (response.ok) return response.json();
    }).then(data => {
        let heroes = generarTarjetas(data);
        console.log("Datos cargados correctamente desde la BD");
        trazas.textContent = "Datos cargados correctamente desde la BD";
        btnGuardarEnBD.setAttribute("disabled", ""); // Se deshabilita el botón para eliminar la opción de guardar datos cargados desde la BD
        return heroes;
    }).catch(error => {
        console.log("Error al cargar los datos de la BD:", error);
        trazas.textContent = "Error al cargar los datos de la BD";
    });

}

function guardarEnBD_XHR() {
    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
        let tarjetasMarcadas = obtenerTarjetasMarcadas();

        xhr.open("POST", URL_SAVE_DB);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.addEventListener("readystatechange", tratarRespuestaXHR);

        xhr.send(JSON.stringify(tarjetasMarcadas));
    } else {
        console.log("El navegador no soporta AJAX");
        trazas.textContent = "El navegador no soporta AJAX";
    }
}

function tratarRespuestaXHR() {
    if (xhr.readyState === READY_STATE_COMPLETE) {
        if (xhr.status === STATUS_OK) {
            console.log(JSON.parse(xhr.responseText).resultado);
            trazas.textContent = JSON.parse(xhr.responseText).resultado;
        } else {
            console.log("Error en la petición al servidor");
            trazas.textContent = "Error en la petición al servidor";
        }
    }
}

function obtenerTarjetasMarcadas() {
    let tarjetas = document.getElementsByClassName("card");
    let tarjetasMarcadas = [];

    for (const i in tarjetas) {
        let nodosTarjeta = tarjetas[i].children;
        if (nodosTarjeta !== undefined && nodosTarjeta[1].children[nodosTarjeta[1].children.length-1].children[0].checked === true) {
            tarjetasMarcadas.push(JSON.parse(tarjetas[i].getAttribute("datos_heroe")));
        }
    }
    return tarjetasMarcadas;
}

function generarTarjetas(heroes) {
    limpiarTarjetas();
    heroes.forEach(heroe => {
        generarTarjeta(heroe);
    });
}

function generarTarjeta(heroe) {
    let card = document.createElement("div");
    contenedorTarjetas.appendChild(card);
    card.className = "card";
    card.style.width = "18rem";
    card.style.marginBottom = "20px";

    let img = document.createElement("img");
    card.appendChild(img);
    img.className = "card-img-top";

    let cardBody = document.createElement("div");
    card.appendChild(cardBody);
    cardBody.className = "card-body";

    let h5 = document.createElement("h5");
    cardBody.appendChild(h5);
    h5.className = "card-title";
    h5.textContent = heroe.name;

    let p = document.createElement("p");
    cardBody.appendChild(p);
    p.className = "card-text";
    p.textContent = heroe.modified;

    if (heroe.comics !== undefined) { // Se ejecutará solo cuando el GET se haga a la Web
        heroe.comics.items.forEach(comic => {
            p = document.createElement("p");
            cardBody.appendChild(p);
            p.className = "card-text";
            p.textContent = comic.name;
        });

        let divCheck = document.createElement("div");
        cardBody.appendChild(divCheck);
        divCheck.className = "form-check form-switch";
    
        let input = document.createElement("input");
        divCheck.appendChild(input);
        input.className = "form-check-input";
        input.type = "checkbox";
        input.id = "i_" + heroe.name;
    
        let label = document.createElement("label");
        divCheck.appendChild(label);
        label.className = "form-check-label";
        label.htmlFor = "i_" + heroe.name;
        label.textContent = "Guardar";

        card.setAttribute("datos_heroe", JSON.stringify(limpiarDatosHeroe(heroe)));
        img.src = heroe.thumbnail.path + "/portrait_uncanny." + heroe.thumbnail.extension;
    } else {
        img.src = heroe.path;
    }
}

function limpiarDatosHeroe(heroe) {
    let heroe_limpiado = {
        id: heroe.id,
        name: heroe.name,
        modified: heroe.modified,
        path: heroe.thumbnail.path + "/portrait_uncanny." + heroe.thumbnail.extension
    };
    return heroe_limpiado;
}

function limpiarTarjetas() {
    contenedorTarjetas.innerHTML = "";
    console.log("Tarjetas limpiadas");
    trazas.textContent = "Tarjetas limpiadas";
    
}