/**
 * @author David Martínez Merencio
 */

/* Asignación de elementos HTML a variables */
let bInputText = document.getElementById("bInputText");
let bInputPassword = document.getElementById("bInputPassword");
let bInputTextarea = document.getElementById("bInputTextarea");
let bLabel = document.getElementById("bLabel");
let bImage = document.getElementById("bImagen");
let bCheckbox = document.getElementById("bCheckbox");
let bRadio = document.getElementById("bRadio");
let bSubmit = document.getElementById("bSubmit");

let formulario = document.getElementById("formulario");

/* Creación de eventos al hacer click en cada evento. Se llama así a los métodos para generar cada elemento del formulario */
bInputText.addEventListener("click", () => {
    let nombre = prompt("Nombre del input:");
    crearInputText(nombre);
});

bInputPassword.addEventListener("click", () => {
    let nombre = prompt("Nombre del input:");
    crearInputPassword(nombre);
});

bInputTextarea.addEventListener("click", () => {
    let nombre = prompt("Nombre del input:");
    crearInputTextarea(nombre);
});

bLabel.addEventListener("click", () => {
    let forId = prompt("Input al que va referido el label:");
    let texto = prompt("Texto del label:");
    crearLabel(forId, texto);
});

bImagen.addEventListener("click", () => {
    let ruta = prompt("Ruta de la imagen:");
    crearImagen(ruta);
});

bCheckbox.addEventListener("click", () => {
    let nombre = prompt("Nombre del checkbox:");
    let valor = prompt("Valor del checkbox:");
    let texto = prompt("Texto que acompaña al checkbox:");
    crearCheckbox(nombre, valor, texto);
});

bRadio.addEventListener("click", () => {
    let nombre = prompt("Nombre del radio:");
    let valor = prompt("Valor del radio:");
    let texto = prompt("Texto que acompaña al radio:");
    crearRadio(nombre, valor, texto);
});

bSubmit.addEventListener("click", () => {
    let nombre = prompt("Nombre del botón:");
    let valor = prompt("Valor del botón:");
    crearSubmit(nombre, valor);
});

/* Funciones para crear los diferentes elementos de un formulario */
function crearInputText(nombre) {
    let elemento = document.createElement("input");

    elemento.type = "text";
    elemento.name = nombre;
    elemento.id = nombre

    document.body.appendChild(elemento);
    document.body.appendChild(document.createElement("br"));
}

function crearInputPassword(nombre) {
    let elemento = document.createElement("input");

    elemento.type = "password";
    elemento.name = nombre;
    elemento.id = nombre

    document.body.appendChild(elemento);
    document.body.appendChild(document.createElement("br"));
}

function crearInputTextarea(nombre) {
    let elemento = document.createElement("textarea");

    elemento.name = nombre;
    elemento.id = nombre
    elemento.rows = 5;
    elemento.cols = 40;

    document.body.appendChild(elemento);
    document.body.appendChild(document.createElement("br"));
}

function crearLabel(forId, texto) {
    let elemento = document.createElement("label");

    elemento.for = forId;
    elemento.textContent = texto;

    document.body.appendChild(elemento);
}

function crearImagen(ruta) {
    let elemento = document.createElement("img");

    elemento.src = ruta;
    elemento.setAttribute("height", "100px");
    elemento.setAttribute("width", "auto");

    document.body.appendChild(elemento);
    document.body.appendChild(document.createElement("br"));
}

function crearCheckbox(nombre, valor, texto) {
    let elemento = document.createElement("input");

    elemento.type = "checkbox";
    elemento.name = nombre;
    elemento.id = nombre
    elemento.value = valor;

    document.body.appendChild(elemento);
    document.body.appendChild(document.createTextNode(texto));
    document.body.appendChild(document.createElement("br"));
}

function crearRadio(nombre, valor, texto) {
    let elemento = document.createElement("input");

    elemento.type = "radio";
    elemento.name = nombre;
    elemento.id = nombre
    elemento.value = valor;

    document.body.appendChild(elemento);
    document.body.appendChild(document.createTextNode(texto));
    document.body.appendChild(document.createElement("br"));
}

function crearSubmit(nombre, valor) {
    let elemento = document.createElement("button");

    elemento.type = "submit";
    elemento.name = nombre;
    elemento.id = nombre
    elemento.value = valor;
    elemento.textContent = valor;

    document.body.appendChild(elemento);
    document.body.appendChild(document.createElement("br"));
}

