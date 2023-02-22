"use strict";
exports.__esModule = true;
exports.Employee = void 0;
//decoradores simplemente en función
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("camiseta estampada con el logo de  ".concat(logo));
        };
    };
}
// y lo aplico en este caso con logo por parametro OJO nunca se cierra con ;
// @estampar("Prada")
//heredo con extends cuando hago la clase y me traigo todos los atributos del padre a la hija
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "El numero es: " + numero;
}
console.log(getNumero(55));
//clases typescript muy detallado
// clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    //metodo (funciones o acciones del objeto) metodo para cambiar color
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
// var playera = new Camiseta();
// playera.color = "Rojo";
// playera.modelo = "Manga corta";
// playera.marca = "Nike";
// playera.talla = "L";
// playera.precio = 10;
var playera = new Camiseta();
playera.setColor("Rojo");
// playera.getColor();--> para conseguir el color
console.log(playera);
var Employee = /** @class */ (function () {
    function Employee(name, lastName, code) {
        this.name = name;
        this.lastName = lastName;
        this.code = code;
    }
    return Employee;
}());
exports.Employee = Employee;
// var employee1 = new Employee("Jose","Gonzalez", 123);
// var employee2 = new Employee("Maria","Salazar", 321);
// console.log(employee1, employee2);
