// Función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calcularImc(altura,peso) {
    let imc = peso / (altura * altura);
    return imc;
}

var altura = 1.65;
var peso = 70;

var indiceMasaCorporal = calcularImc(altura,peso);
console.log ("El indice de masa corporal (IMC) es: ", indiceMasaCorporal.toFixed(2));

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calculoFactorial(numero) {
    if (numero == 0 || numero == 1) {
        return 1;
    } else{
        return numero * calculoFactorial(numero - 1);
    }
}
let num = 6;    
let resultado = calculoFactorial(num);
console.log (`El factorial de ${num} es: ${resultado}`);

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolares(dolares) {
    let resultado = dolares * 4.80;
    return resultado;
}
// se puede mejorar añadiendo un parametro con una const adicional para poderla usar con varias divisas
let valorDolares = 1;  
const valorReales = 4.80;
let conversionReales = convertirDolares (valorDolares);
console.log("El valor en Reales es: ", conversionReales.toFixed(2));

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function calculoSala(base, altura) {
    var area = base * altura;
    var perimetro = 2 * (base + altura);
    return [area, perimetro];
    // Devolver un array con ambos resultados
}
var medidaBase = 7.5;
var medidaAltura = 10;
var [area, perimetro] = calculoSala(medidaBase, medidaAltura);
// Desestructurar el array devuelto por la función
console.log("El area de la sala es: ", area);
console.log("El perimetro de la sala es: ", perimetro);

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calculoCircular(radio,  p){
    let perimetroo = (2 * p) * radio;
    let areaa = p * (radio * radio);
    return [areaa, perimetroo];
}

var medidaRadio = 5;
const p = 3.14;    
var [areaa, perimetroo] = calculoCircular(medidaRadio, p);
console.log("El area de la sala es: ", areaa);
console.log("El perimetro de la sala es: ", perimetroo);

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaDeMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Ejemplo de uso de la función con el número 5
tablaDeMultiplicar(5);