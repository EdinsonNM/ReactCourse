class Pelota {
    get nombre(){
        return this._nombre;
    }
    set nombre(value){
        this._nombre;
    }
}

var pelota = new Pelota();
console.log(pelota.nombre);
pelota.nombre = "golf";
console.log(pelota.nombre);