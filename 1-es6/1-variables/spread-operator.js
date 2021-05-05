/**spread operator/operador de propagación */
/**permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos (para llamadas de  función) o elementos (para Array literales) son esperados */

var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]


function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, ...params) === 9


var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]
