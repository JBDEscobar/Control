import { header } from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componentes/seccion1/seccion1Component.js";
import { nav } from "./navFooter/navFooter.js"

function seccion() {
    
   let seccion = document.createElement('section');
//header
   seccion.appendChild(header());

   //seccion 
   seccion.appendChild(seccion1());



   //navFooter




   seccion.appendChild(nav());



  
   return seccion;
   

}

document.body.appendChild(seccion());
