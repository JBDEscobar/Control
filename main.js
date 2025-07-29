import { header } from "./Componentes/header/headerComponent.js";
import { seccion1 } from "./Componentes/seccion1/seccion1Components.js";
import { item } from "./Componentes/modulos/item/itemModulo.js";



function seccion() {


    /* header */

    let seccion = document.createElement("section");

    seccion.appendChild(header());

    


    /* seccion */
    seccion.appendChild(seccion1());





   
    




    return seccion;


}

document.body.appendChild(seccion());
