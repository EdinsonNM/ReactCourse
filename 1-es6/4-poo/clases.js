class Pelota{
    constructor(nombre){

    }
    marca(marca){
        this.marca = marca;
    }
}

var pelota = new Pelota("futbol");
pelota.marca("Umbro");

console.log(pelota);
console.log(pelota.nombre);
console.log(pelota.marca);