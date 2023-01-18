window.addEventListener("load", generarHTMLDinamico());

function generarHTMLDinamico() {
    console.log("Inicio de generación de HTML dinámico");

    //Generación primer div
    let primerDiv = document.createElement("div");
    primerDiv.className = "grid__column_space1of4-3Auw grid__column-2zuc";
    document.body.appendChild(primerDiv);
    console.log("Primer div generado");

    //Generación segundo div
    let segundoDiv = document.createElement("div");
    segundoDiv.className = "grid__card-1AMl grid__is_not_ad-3CXE";
    primerDiv.appendChild(segundoDiv);
    console.log("Segundo div generado");

    //Generación article
    let article = document.createElement("article");
    article.className = "cards__postcard-37d3 cards__postcardLandscape-3RIF cards__font_landscape_single_text_below_4_col-7iX7 cards__columns-4-YOiO background_color_zeta cards__no_has_section-3wNM";
    segundoDiv.appendChild(article);
    console.log("Article generado");

    //Generación tercer div
    let tercerDiv = document.createElement("div");
    article.appendChild(tercerDiv);
    console.log("Tercer div generado");

    //Generación primer img
    let primerImg = document.createElement("img");
    primerImg.title = "";
    primerImg.className = "cards__snap_image-aOud";
    primerImg.loading = "lazy";
    primerImg.src = "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=1024";
    primerImg.srcset = "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=1024 1024w," + 
        "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=800   800w," +
        "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=768   768w," +
        "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=640   640w," +
        "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=600   600w," +
        "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=480   480w," +
        "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=360   360w," +
        "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=320   320w";
    primerImg.sizes = "(min-width: 960px) 502px, (min-width: 768px) 50vw, 100vw";
    primerImg.alt = "";
    primerImg.setAttribute("pinger-seen", "true");
    tercerDiv.appendChild(primerImg);
    console.log("Primer img generado");

    //Generación cuarto div
    let cuartoDiv = document.createElement("div");
    cuartoDiv.className = "cards__postcard__content-1w21";
    article.appendChild(cuartoDiv);
    console.log("Cuarto div generado");

    //Generación figure
    let figure = document.createElement("figure");
    figure.className = "cards__postcard__cnt_media-1R9F";
    cuartoDiv.appendChild(figure);
    console.log("Figure generado");

    //Generación quinto div
    let quintoDiv = document.createElement("div");
    quintoDiv.className = "cards__cnt_coin-2H_i";
    figure.appendChild(quintoDiv);
    console.log("Quinto div generado");

    //Generación sexto div
    let sextoDiv = document.createElement("div");
    quintoDiv.appendChild(sextoDiv);
    console.log("Sexto div generado");

    //Generación span
    let span = document.createElement("span");
    span.className = "cards__postcard__channel-1-fM coin_undefined";
    sextoDiv.appendChild(span);
    console.log("Span generado");

    //Generación séptimo div
    let septimoDiv = document.createElement("div");
    quintoDiv.appendChild(septimoDiv);
    console.log("Séptimo div generado");

    //Generación primer "a"
    let primerA = document.createElement("a");
    primerA.href = "https://www.telecinco.es/la-isla-de-las-tentaciones/galla-desvela-punto-relacion-miguel-hoyos_18_3268924939.html";
    primerA.className = "cards__link-1oHn";
    primerA.target = "_self";
    quintoDiv.appendChild(primerA);
    console.log("Primer \"a\" generado");

    //Generación segundo img
    let segundoImg = document.createElement("img");
    segundoImg.title = "";
    segundoImg.className = "cards__image-24d0";
    segundoImg.loading = "lazy";
    segundoImg.src = "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=1024";
    segundoImg.srcset = "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=1024 1024w," + 
        "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=800   800w," +
        "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=768   768w," +
        "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=640   640w," +
        "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=600   600w," +
        "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=480   480w," +
        "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=360   360w," +
        "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=320   320w";
    segundoImg.sizes = "(min-width: 960px) 245px, (min-width: 768px) 50vw, 100vw";
    segundoImg.alt = "Gal·la desvela en qué punto se encuentra con Miguel de Hoyos";
    segundoImg.setAttribute("pinger-seen", "true");
    primerA.appendChild(segundoImg);
    console.log("Segundo img generado");

    //Generación octavo div
    let octavoDiv = document.createElement("div");
    octavoDiv.className = "cards__postcard__cnt_info-21bV";
    cuartoDiv.appendChild(octavoDiv);
    console.log("Octavo div generado");

    //Generación noveno div
    let novenoDiv = document.createElement("div");
    novenoDiv.className = "sponsor__content-3-Ul sponsor__typeH-3Hjq sponsor__imgBand-2XTv";
    octavoDiv.appendChild(novenoDiv);
    console.log("Noveno div generado");

    //Generación décimo div
    let decimoDiv = document.createElement("div");
    decimoDiv.setAttribute("data-agth", "cardTitle");
    octavoDiv.appendChild(decimoDiv);
    console.log("Décimo div generado");

    //Generación segundo "a"
    let segundoA = document.createElement("a");
    segundoA.className = "color_eta";
    segundoA.href = "https://www.telecinco.es/la-isla-de-las-tentaciones/galla-desvela-punto-relacion-miguel-hoyos_18_3268924939.html";
    segundoA.target = "_self";
    decimoDiv.appendChild(segundoA);
    console.log("Segundo \"a\" generado");

    //Generación h3
    let h3 = document.createElement("h3");
    h3.className = "site_font cards__postcard__paragraph-2EVg color_eta color_eta";
    h3.innerHTML = "<!-- -->Gal·la desvela en qué punto se encuentra su relación con Miguel tras su rechazo en 'La isla de las tentaciones'<!-- -->";
    segundoA.appendChild(h3);
    console.log("H3 generado");
}
