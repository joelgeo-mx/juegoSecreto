var numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
// Con esta funcion ya declarada, podemos cambiar internamente donde teniamos el h1 y nombrarlo ahora como elemento... Lo mismo para el texto. 
// Tambien procedemos a cambiar la variable a elementoHTML
function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
    // return numeroSecreto;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
        document.querySelector('#intentar').setAttribute('disabled', 'true');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Numero Secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    // Esta seria la ejecucion de la funcion antes declarada, se puede hacer en la app desde fuera de las llaves, o tambien en algunos eventos dentro del Archivo HTML
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales(); 
    document.querySelector('#reiniciar').setAttribute('disabled','true');  
}
condicionesIniciales();















// Comments Generales:
// En este codigo se empezo a trabajar con las funciones de una manera mas formal, y luego se paso a la manera simplificada/automatizada.
// Voy a dejar las evidencias en esta seccion para no olvidar los primeros pasos del codigo.>>>>>>>>>>>>



// let titulo = document.querySelector('h1');
// // con "document." tenemos la posibilidad de indicarle a nuestro codigo   .js que vamos a alterar el HTML. Es como un puente que une ambos codigos. querySelector es la funcion que permite especificar sobre que objeto vamos a trabajar en este caso 'h1'. Con let titulo hacemos que toda la funcion sea una variable con la cual podemos jugar
// titulo.innerHTML = 'Juego del numero secreto';
// // ahora que se llama la variable antes nombrada titulo, y con innerHTML podemos ingresarle un texto a esa variable
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un numero del 1 al 10';
// // 
// Este codigo puede salvar 1 vida
// function calcularPromedio(nota1, nota2, nota3, nota4){
//     let promedio = (nota1 +  nota2 +  nota3 +  nota4)/4
//     return promedio;
// function verificarAprobacion(promedio){
//         return promedio >= 5 ? "Aprobado" : "Reprobado";
// }
// Salida del sorteo pero reiniciando la lista en lugar de detener el juego
// // function sortearLibro() {
//     let libroElegido = parseInt(Math.random() * numeroLimite + 1);
//     let cantidadDeLibrosSorteados = listaDeLibrosSorteados.length;
//     if (cantidadDeLibrosSorteados == numeroLimite) {
//         listaDeLibrosSorteados = [];
//     }
//     // Código omitido
// }

// *********************************************
// Para añadir un elemento al final en un array:
// frutas.push("Fresa");
// console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]
// *********************************************
// Para eliminar el ultimo elemento en un array:
// frutas.pop();
// console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]

