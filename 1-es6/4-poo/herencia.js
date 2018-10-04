class Pelota {
    constructor(nombre){
        this.nombre = nombre;
    }
    marca(marca){
        this.marca = marca;
    }
}

class Ruckby extends Pelota {
    constructor(nombre, forma){
        super(nombre);
        this.forma = forma;
    }
}