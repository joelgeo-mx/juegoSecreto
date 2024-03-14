function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    console.log('Hola Mundito')
    return;
}
asignarTextoElemento('h1', 'Estoy probando mi primer funcion');

function saludar(){
    let nombre = document.getElementById("nombreUsuario").value;
    console.log('Hola, '+ nombre);
}

function doble(numero) {
    return numero * 2;
}
console.log(doble(10));

function promedio(numero1,numero2,numero3){
    return (numero1 + numero2 + numero3) / 3;
}
console.log(promedio(4,2,6));

function mayor(numero1, numero2){
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}
console.log(mayor(116, 6));

function multiplicarPorSi(numero){
    return (numero*numero);
}
console.log(multiplicarPorSi(2));

function saludos(name){
    console.log("Hola, " + name);
}
saludos("Jose luis")