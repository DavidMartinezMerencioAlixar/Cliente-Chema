let botonAniadir = document.getElementById("botonAniadir");
let listado = document.getElementById("listado");
let botonBorrar1o = document.getElementById("botonBorrar1o");
let botonBorrarUlt = document.getElementById("botonBorrarUlt");

botonAniadir.addEventListener("click", () => {
    let txtPrompt = prompt("Texto a añadir al listado");
    if (txtPrompt != null && txtPrompt != "") {
        let nuevo_li = document.createElement("li");
        let txt_nuevo_li = document.createTextNode(txtPrompt);
        nuevo_li.appendChild(txt_nuevo_li);
        listado.appendChild(nuevo_li);
    }
});

botonBorrar1o.addEventListener("click", () => {
    // console.log(listado.getElementsByTagName("li"));
    console.log(listado.childNodes);
    if (listado.childNodes.length >= 2) {
        listado.removeChild(listado.firstChild);
        listado.removeChild(listado.firstChild);
    }

});

botonBorrarUlt.addEventListener("click", () => {
    console.log(listado.childNodes);
    if (listado.childNodes.length >= 2) {
        listado.removeChild(listado.lastChild);
        listado.removeChild(listado.lastChild);
    }
});
