// tsc -w *.ts ---->Starting compilation in watch mode

// console.log('hola mundo con Typescript');
// alert('hola mundo con ts');

var valor:string = "5";
var valor1:number = 3;

var sumar = (val:string, val1:number)=>{
    console.log('resultado: '+ (val+val1));
};

sumar(valor, valor1);

//tipos de datos en typescript
//string
var cadena: string = "Moni Blanco";

//number
var number: number = 76;

//Boleano
var verdadero: boolean= true;

//Any
var cualquiera: any= "hola";

//Arrays
var lenguajes: Array<string>=["PHP", "JS", "JAVA"];

var years: number[]=[12, 14, 16];


//string or number type alfanumerico =string|number
var nombre: string | number = "Monica Blanco";
nombre = 8;



console.log(cadena, number, verdadero, cualquiera, lenguajes, years, nombre);


//let vs var los var se redefinen el let solo scope de if
var numero1 = 12;
var numero2 =24;

if(numero1== 12){
    let numero1=44;
    var numero2=63;
        console.log(numero1, numero2)
}

console.log(numero1, numero2)