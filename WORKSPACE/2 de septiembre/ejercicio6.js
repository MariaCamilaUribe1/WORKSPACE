const nombres =  ["Pepito", "Fulanito", "Peranito","Sultanito", "Camilia","Andreita"];
function mostrar(){
    for(i=1; i<=5; i++){
        const nodohijo = document.createElement ("h1");
        nodohijo.innerHTML=nombres [i];
        lista.appendChild(nodohijo);
        const hrimp =document.createElement("hr");
        lista.appendChild(hrimp);
    }

}


    