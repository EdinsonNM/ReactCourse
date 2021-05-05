/**Conjuntos */
/**
 * es una colección de tipos especiales - "conjunto de valores" (sin claves), donde cada valor puede aparecer sólo una vez
 */
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