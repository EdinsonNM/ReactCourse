/**Generadores */
/**
 * Un generador es una función especial en JavaScript que puede pausar su ejecución y retomarla en un punto arbitrario. Para definirlos utilizamos dos nuevas palabras reservadas del lenguaje: function* y yield
 */
/**
 * yield: producir, decer
 */

function* hacedorIds() {
    var indice = 0;
    while(true)
        yield indice++;
}

var gen = hacedorIds();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2



function* oddsGenerator() {
    let n = 0
    while (true) {
        yield 2*n + 1
        n++
    }
}

function take(n, iter) {
    let counter = n
    for ( c of iter) {
        console.log(c)
        counter--
        if(counter <= 0) break
    }
}

var oddNumbers = oddsGenerator() // TODOS los números impares 

take(5, oddNumbers) // toma 5 números impares