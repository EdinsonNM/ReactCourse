/**Conjuntos */

var operadores = new Set();
operadores.add("+")
operadores.add("-");
operadores.add("*").add("/");

console.log(operadores);

console.log(operadores.has("*"));
console.log(operadores.size);
console.log(operadores.delete("*"));
console.log(operadores);

operadores.forEach(operador => console.log(operador));