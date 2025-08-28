function positivo () {
    const numero = document.getElementById ("numero");
    const numeroInt = parseInt (numero.value); 

    if(numeroInt>=0) {
      alert ( "El numero es positivo");
    } else {
      alert ("El nuemero es negativo");
    }      
}

function espar () {
    const numero = document.getElementById ("par");
    const numeroInt = parseInt (numero.value); 

    if(numeroInt %2==0 ) {
      alert ( "El numero es par");
    } else {
      alert ("El nuemero es impar");
    }      
}

   