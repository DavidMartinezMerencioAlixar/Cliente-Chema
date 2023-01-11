/**
 * @author David Martínez Merencio
 */

let listaParrafos = document.getElementsByTagName("p");
let listaEnlaces = document.getElementsByTagName("a");

//Número de párrafos de la página
let numParrafos = listaParrafos.length;
console.log("Número de párrafos de la página:", numParrafos);

//El texto del segundo párrafo.
let txt2oParrafo = listaParrafos[1].textContent;
console.log("El texto del segundo párrafo:", txt2oParrafo);

//El número de enlaces de la página.
let numEnlaces = listaEnlaces.length;
console.log("El número de enlaces de la página:", numEnlaces);

//La dirección del primer enlace.
let direc1erEnlace = listaEnlaces[0].href;
console.log("La dirección del primer enlace:", direc1erEnlace);

//La dirección del penúltimo enlace.
let direcPenultEnlace;
if (listaEnlaces.length >= 2) {
    direcPenultEnlace = listaEnlaces[listaEnlaces.length - 2].href;
} else {
    direcPenultEnlace = "No hay enlace";
}
console.log("La dirección del penúltimo enlace:", direcPenultEnlace);

//El número de enlaces que apuntan a /wiki/Municipio
let numEnlacesWikiMunicipio = 0;
/* Recorre la lista de enlaces y suma 1 al contador cuando detecta que un enlace contiene /wiki/Municipio */
for (let i = 0; i < listaEnlaces.length; i++) {
    let enlace = listaEnlaces[i].href;
    if (enlace.indexOf("/wiki/Municipio") != -1) {
    // if (enlace.includes("/wiki/Municipio")) {
        numEnlacesWikiMunicipio++;
    }
}
console.log("El número de enlaces que apuntan a /wiki/Municipio:", numEnlacesWikiMunicipio);

//El número de enlaces del primer párrafo.
let numEnlaces1erParrafo = listaParrafos[0].getElementsByTagName("a").length;
console.log("El número de enlaces del primer párrafo:", numEnlaces1erParrafo);


//Recopilación e impresión en el navegador de los datos obtenidos en los diferentes apartados
let info = document.getElementById("info");
info.innerHTML = "· Número de párrafos de la página: <b>" + numParrafos + "</b><br>" +
    "· El texto del segundo párrafo: <b>" + txt2oParrafo + "</b><br>" +
    "· El número de enlaces de la página: <b>" + numEnlaces + "</b><br>" +
    "· La dirección del primer enlace: <b>" + direc1erEnlace + "</b><br>" +
    "· La dirección del penúltimo enlace: <b>" + direcPenultEnlace + "</b><br>" +
    "· El número de enlaces que apuntan a /wiki/Municipio: <b>" + numEnlacesWikiMunicipio + "</b>";
