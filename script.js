//1. Algoritmo para imprimir números del 1 al 10

let i = 1
while (i <= 10) {
    console.log(i);
    i++;
}

//2. Algoritmo para sumar los primeros 10 números

let contador = 1;
let suma = 0;

while (contador <= 10) {
    suma = suma + contador;
    contador++;
}

console.log("La suma es: " + suma);

//3. Algoritmo para generar la tabla de un numero dado por argumento en una función ciclo while
function tablademultiplicar(numero){
    let k = 0;
    while (k <= 10) {
        let resultado = numero * k;
        console.log(numero + " x " + k + " = " + resultado);
    }

}


// 4. Algoritmo para contar ocurrencias de 'a' en un texto
function contarA(texto) {
    let i = 0;
    let contador = 0;
    while (i < texto.length) {
        if (texto[i] === 'a' || texto[i] === 'A') {
            contador++;
        }
        i++;
    }
    return contador;
}
console.log(contarA("JavaScript es asombroso")); // Ejemplo


// 5. Algoritmo para calcular el factorial de un número
function factorial(n) {
    let resultado = 1;
    let i = 1;
    while (i <= n) {
        resultado *= i;
        i++;
    }
    return resultado;
}
console.log(factorial(5)); // 120


// 6. Función que recibe un array y devuelve solo los números pares
function filtrarPares(arr) {
    let i = 0;
    let pares = [];
    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            pares.push(arr[i]);
        }
        i++;
    }
    return pares;
}
console.log(filtrarPares([1, 2, 3, 4, 5, 6]));


// 7. Suma de los cuadrados de los primeros N números naturales
function sumaCuadrados(n) {
    let i = 1;
    let suma = 0;
    while (i <= n) {
        suma += i * i;
        i++;
    }
    return suma;
}
console.log(sumaCuadrados(5)); // 1²+2²+3²+4²+5² = 55


// 8. Potencia de un número (base^exponente) con ciclo while
function potencia(base, exponente) {
    let resultado = 1;
    let i = 0;
    while (i < exponente) {
        resultado *= base;
        i++;
    }
    return resultado;
}
console.log(potencia(2, 5)); // 32


// 9. Generar los primeros N términos de la serie de Fibonacci
function fibonacci(n) {
    let fib = [0, 1];
    let i = 2;
    while (i < n) {
        fib.push(fib[i - 1] + fib[i - 2]);
        i++;
    }
    return fib.slice(0, n);
}
console.log(fibonacci(10)); // Primeros 10 términos


// 10. Generar la tabla de multiplicar de un número
function tablaMultiplicar(num) {
    let i = 1;
    let tabla = [];
    while (i <= 10) {
        tabla.push(`${num} x ${i} = ${num * i}`);
        i++;
    }
    return tabla;
}
console.log(tablaMultiplicar(7));
