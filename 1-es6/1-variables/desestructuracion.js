/**Desesctructuración */
/**
 * es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.
 */
var {nombre, peso} = {nombre:"manzana", peso: "250 gramos"}

console.log(nombre, peso);

var [a, b, c] = ["manzana", "pera", "uva"]
console.log(a, b, c);