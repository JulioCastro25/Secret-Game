let numeroSecreto = 0
let intentos = 0;
let listaDeNumeroSorteados =[];
let numeroMaximo = 10;
let intentosMaximos = 5;

function asignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return; 
} 

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    // console.log(intentos);
    
    if(numeroDeUsuario === numeroSecreto) { 
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos ===1) ? "intento" : "intentos"}`)
        document.getElementById('reiniciar').removeAttribute('disabled'); 

    } else { 
        if (numeroDeUsuario > numeroSecreto)
        asignarTextoElemento("p", "El numero secreto es menor");
        else { 
        asignarTextoElemento("p", "El numero secreto es mayor");

        if (intentos == intentosMaximos) { 
            asignarTextoElemento('p', 'No acertaste, alcanzaste el numero maximo de intentos');
        }

    }
    intentos++;
    limpiarCaja();
}
    return;
}

function limpiarCaja() { 
    document.querySelector('#valorUsuario').value = ''; 
    
} 

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumeroSorteados);

    if (listaDeNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p','Ya se sortearon todos los numeros posibles');

    } else {    
        if(listaDeNumeroSorteados.includes(numeroGenerado)) { 
        return generarNumeroSecreto();

    }   else {
        listaDeNumeroSorteados.push(numeroGenerado);

        return numeroGenerado;
}

     }
        
}
function condicionesIniciales() { 
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;

}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');   

}

condicionesIniciales(); 