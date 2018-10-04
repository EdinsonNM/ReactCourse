var cuenta = {cliente: "Edinson Nuñez"};
var alimentos = {nombre: "hamburguesas", cantidad: 2};
var bebidas = {tipo: "cerveza", sabor:"artesanal"}

Object.assign(cuenta, alimentos, bebidas);

console.log(cuenta);
console.log(cuenta.sabor);