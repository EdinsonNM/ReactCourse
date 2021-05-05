/**
 * es usado para computaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.
 */
var promesa = new Promise(function(resolve, reject){
    var frutas = ["manzana", "pera", "uva"];
    var contador = 0;
    for (let element of frutas) {
        contador++; 
    }
    if(contador > 2){
        resolve("El ciclo termino");
    }else {
        reject(Error("Algo salió mal..."))
    }
})


promesa.then(
    function(resultado){
        console.log(resultado);
    }, function(error){
        console.log(error);
})