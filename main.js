document.addEventListener("DOMContentLoaded") , function(e){

const parrafos = document.querySelectorAll('.descripcion');

let alturas =  [];
let alturaMaxima = 0;

const aplicarAlturas = (function aplicaralturas(){
    parrafos.forEach(parrafo => {

        if(alturaMaxima == 0){
            alturas.push(parrafo.clientHeight);
        }else{
            parrafo.getElementByClassName.Height = alturaMaxima + "px";
        }
        
    });

})();

alturaMaxima = Math.max.apply(math, alturas);

aplicarAlturas()

};
    

