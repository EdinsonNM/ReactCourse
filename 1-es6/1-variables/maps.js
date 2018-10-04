var fruta = new Map();

fruta.set("nombre", "Manzana");
fruta.set("peso", "250 gramos");

console.log(fruta);

console.log(fruta.get("nombre"));
console.log(fruta.has("nombre"));
console.log(fruta.delete("nombre"));

console.log(fruta.has("nombre"));

console.log(fruta);

