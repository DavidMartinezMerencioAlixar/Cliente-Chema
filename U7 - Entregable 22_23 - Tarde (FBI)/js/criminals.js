/**
 * @author David Martínez Merencio
 */

let btnLoad, btnClean, btnGetXHR, btnGetFetch, resultsContainer, tableContainer, xhr;
const READY_STATE_COMPLETED = 4;
const STATUS_OK = 200;
const URL_WEB = "https://api.fbi.gov/@wanted";
const URL_DB_GET = "./DB/get_criminals.php";
const URL_DB_POST = "./DB/save_criminal.php";

window.addEventListener("load", start);

function start() {
    console.log("start");
    btnLoad = document.getElementById("btnLoad");
    btnClean = document.getElementById("btnClean");
    btnGetXHR = document.getElementById("btnGetXHR");
    btnGetFetch = document.getElementById("btnGetFetch");
    resultsContainer = document.getElementById("resultsContainer");
    tableContainer = document.getElementById("tableContainer");

    btnLoad.addEventListener("click", loadXHRFromWeb);
    btnClean.addEventListener("click", cleanTable);
    btnGetXHR.addEventListener("click", loadXHRFromDB);
    btnGetFetch.addEventListener("click", loadFetchFromDB);
}

function loadXHRFromWeb() {
    console.log("loadXHRFromWeb");
    if (XMLHttpRequest) {
        console.log("loadXHRfromWeb OK");
        xhr =  new XMLHttpRequest();

        xhr.addEventListener("readystatechange", checkResult);
        xhr.open("GET", URL_WEB);
        xhr.send();
        resultsContainer.textContent = "Criminals loaded into the table from the web";
    } else {
        console.log("El navegador no soporta peticiones XMLHttpRequest");
        alert("El navegador no soporta peticiones XMLHttpRequest");
    }
}

function loadXHRFromDB() {
    console.log("loadXHRFromDB");
    if (XMLHttpRequest) {
        console.log("loadXHRfromWeb OK");
        xhr =  new XMLHttpRequest();

        xhr.addEventListener("readystatechange", checkResult);
        xhr.open("GET", URL_DB_GET);
        xhr.send();
        resultsContainer.textContent = "Criminals loaded into the table from the database using XMLHttpRequest";
    } else {
        console.log("El navegador no soporta peticiones XMLHttpRequest");
        alert("El navegador no soporta peticiones XMLHttpRequest");
    }
}

function loadFetchFromDB() {
    console.log("loadFetchFromDB");
    fetch(URL_DB_GET)
    .then(response => {
        if (response.ok) return response.json();
    }).then(data => {
        loadTable(cleanCriminalsAttributes(data));
        resultsContainer.textContent = "Criminals loaded into the table from the database using Fetch";
    }).catch(error => {
        console.log("Error in loadFetchFromDB fetch:", error);
        resultsContainer.textContent = "Error loading criminals into the table from the database using Fetch";
    });
}

function checkResult() {
    console.log("checkResult");
    if (xhr.readyState === READY_STATE_COMPLETED && xhr.status === STATUS_OK) {
        console.log("checkResult OK");
        loadTable(cleanCriminalsAttributes(JSON.parse(xhr.responseText)));
    }
}

function cleanCriminalsAttributes(criminals) {
    console.log("cleanCriminalsAttributes");
    let cleanedCriminals = [];
    let cleanedCriminal;

    if (criminals.items !== undefined) {
        criminals.items.forEach(criminal => {
            cleanedCriminal = {
                uid: criminal.uid,
                title: criminal.title,
                description: criminal.description,
                aliases: criminal.aliases,
                images: criminal.images[0].thumb
            };
            cleanedCriminals.push(cleanedCriminal);
        });
        return cleanedCriminals;
    } else {
        return criminals;
    }
}

function saveCriminal(criminal) {
    console.log("saveCriminal");
    fetch(URL_DB_POST, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: criminal
    }).then(response => {
        if (response.ok) return response.json();
    }).then(data => {
        if (data.result === "Criminal inserted properly. ") {
            resultsContainer.textContent = "Criminal inserted properly";
        } else {
            resultsContainer.textContent = "Criminal insert failed";
        }
    }).catch(error => {
        console.log("Error in saveCriminal fetch:", error);
        resultsContainer.textContent = "Error inserting a criminal into the database using Fetch";
    });
}

function loadTable(criminals) {
    console.log("loadTable");
    tableContainer.innerHTML = "";
    let table = document.createElement("table");
    tableContainer.appendChild(table);

    let th, td, img, btnSave;
    let tr = document.createElement("tr");
    table.appendChild(tr);

    const thNames = ["uid", "title", "description", "aliases", "images", "save"];
    thNames.forEach(thName => {
        th = document.createElement("th");
        th.appendChild(document.createTextNode(thName));
        tr.appendChild(th);
    });
    
    criminals.forEach(criminal => {
        tr = document.createElement("tr");
        table.appendChild(tr);

        td = document.createElement("td");
        criminal.uid !== null ? td.appendChild(document.createTextNode(criminal.uid)) : "";
        tr.appendChild(td);

        td = document.createElement("td");
        criminal.title !== null ? td.appendChild(document.createTextNode(criminal.title)) : "";
        tr.appendChild(td);

        td = document.createElement("td");
        criminal.description !== null ? td.appendChild(document.createTextNode(criminal.description)) : "";
        tr.appendChild(td);

        td = document.createElement("td");
        criminal.aliases !== null ? td.appendChild(document.createTextNode(criminal.aliases)) : "";
        tr.appendChild(td);

        td = document.createElement("td");
        img = document.createElement("img");
        img.src = criminal.images;
        criminal.images !== null ? td.appendChild(img) : "";
        tr.appendChild(td);

        td = document.createElement("td");
        btnSave = document.createElement("button");
        btnSave.appendChild(document.createTextNode("Save"));
        // Crea un atributo "criminal" en el botón con los datos del criminal que tiene que guardar al ser clickado.
        // Esta solución consume menos procesador y más RAM. He decidido aplicarla porque me parecía más original y elegante
        // que poner un id por botón y comprobar en tr es el que tendría que guardar.
        btnSave.setAttribute("criminal", JSON.stringify(criminal));
        td.appendChild(btnSave);
        tr.appendChild(td);
        btnSave.addEventListener("click", event => {
           saveCriminal(event.target.getAttribute("criminal"));
        });
    });
}

function cleanTable() {
    console.log("cleanTable");
    tableContainer.innerHTML = "";
    resultsContainer.textContent = "Table cleaned"
}
