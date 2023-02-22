// tsc -w *.ts ---->Starting compilation in watch mode
// console.log('hola mundo con Typescript');
// alert('hola mundo con ts');
var valor = "5";
var valor1 = 3;
var sumar = function (val, val1) {
    console.log('resultado: ' + (val + val1));
};
sumar(valor, valor1);
//tipos de datos en typescript
//string
var cadena = "Moni Blanco";
//number
var number = 76;
//Boleano
var verdadero = true;
//Any
var cualquiera = "hola";
//Arrays
var lenguajes = ["PHP", "JS", "JAVA"];
var years = [12, 14, 16];
//string or number type alfanumerico =string|number
var nombre = "Monica Blanco";
nombre = 8;
console.log(cadena, number, verdadero, cualquiera, lenguajes, years, nombre);
//let vs var los var se redefinen el let solo scope de if
var numero1 = 12;
var numero2 = 24;
if (numero1 == 12) {
    var numero1_1 = 44;
    var numero2 = 63;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
