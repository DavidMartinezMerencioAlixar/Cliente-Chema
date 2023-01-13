/**
 * @author David Martínez Merencio
 */

/* Creamos la base del formulario */
let formulario = document.createElement("form");
let fieldset = document.createElement("fieldset");

/* Creamos los labels */
let labelDisco = document.createElement("label");
let labelArtista = document.createElement("label");
let labelAnio = document.createElement("label");
let labelGenero = document.createElement("label");
let labelLocalizacion = document.createElement("label");
let labelPrestado = document.createElement("label");

/* Creamos los inputs */
let inputDisco = document.createElement("input");
let inputArtista = document.createElement("input");
let inputAnio = document.createElement("input");
let selectGenero = document.createElement("select");
let optionRock = document.createElement("option");
let optionPop = document.createElement("option");
let optionPunk = document.createElement("option");
let optionIndie = document.createElement("option");
let inputLocalizacion = document.createElement("input");
let inputPrestado = document.createElement("input");

/* Creamos el botón de enviar */
let botonEnviar = document.createElement("button");

/* Asignamos textos a los labels */
labelDisco.appendChild(document.createTextNode("Disco:"));
labelArtista.appendChild(document.createTextNode("Artista:"));
labelAnio.appendChild(document.createTextNode("Año:"));
labelGenero.appendChild(document.createTextNode("Género:"));
labelLocalizacion.appendChild(document.createTextNode("Localización:"));
labelPrestado.appendChild(document.createTextNode("Prestado"));

/* Asignamos ids a los inputs */
inputDisco.id = "iDisco";
inputArtista.id = "iArtista";
inputAnio.id = "iAnio";
selectGenero.id = "sGenero";
optionRock.id = "optRock";
optionPop.id = "optPop";
optionPunk.id = "optPunk";
optionIndie.id = "optIndie";
inputLocalizacion.id = "iLocalizacion";
inputPrestado.id = "iPresado";

/* Asignamos los for a los labels */
labelDisco.setAttribute("for", inputDisco.id);
labelArtista.setAttribute("for", inputArtista.id);
labelAnio.setAttribute("for", inputAnio.id);
labelGenero.setAttribute("for", selectGenero.id);
labelLocalizacion.setAttribute("for", inputLocalizacion.id);
labelPrestado.setAttribute("for", inputPrestado.id);

/* Asignamos type a los inputs */
inputDisco.type = "text";
inputArtista.type = "text";
inputAnio.type = "number";
inputLocalizacion.type = "text";
inputPrestado.type = "checkbox";

/* Asignamos valor e textContent a los options */
optionRock.value = "Rock";
optionPop.value = "Pop";
optionPunk.value = "Punk";
optionIndie.value = "Indie";
optionRock.textContent = "Rock";
optionPop.textContent = "Pop";
optionPunk.textContent = "Punk";
optionIndie.textContent = "Indie";

/* Asignamos valores al botón de enviar */
botonEnviar.type = "submit";
botonEnviar.id = "enviar";
botonEnviar.textContent = "Enviar";

/* Ponemos restricciones a los inputs a los que le sea necesario */
inputAnio.min = 1582;
inputAnio.max = new Date().getFullYear();

/* Unimos todo el árbol DOM */
formulario.appendChild(fieldset);

fieldset.appendChild(labelDisco);
fieldset.appendChild(inputDisco);
fieldset.appendChild(document.createElement("br"));

fieldset.appendChild(labelArtista);
fieldset.appendChild(inputArtista);
fieldset.appendChild(document.createElement("br"));

fieldset.appendChild(labelAnio);
fieldset.appendChild(inputAnio);
fieldset.appendChild(document.createElement("br"));

fieldset.appendChild(labelGenero);
selectGenero.appendChild(optionRock);
selectGenero.appendChild(optionPop);
selectGenero.appendChild(optionPunk);
selectGenero.appendChild(optionIndie);
fieldset.appendChild(selectGenero);
fieldset.appendChild(document.createElement("br"));

fieldset.appendChild(labelLocalizacion);
fieldset.appendChild(inputLocalizacion);
fieldset.appendChild(document.createElement("br"));

fieldset.appendChild(labelPrestado);
fieldset.appendChild(inputPrestado);
fieldset.appendChild(document.createElement("br"));

formulario.appendChild(botonEnviar);

document.body.appendChild(formulario);
