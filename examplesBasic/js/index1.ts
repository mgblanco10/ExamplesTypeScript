function getNumero(numero:number=12):string{
    return "El numero es: " +numero;
}
console.log(getNumero(55));

//clases typescript muy detallado

// clase (molde del objeto)
class Camiseta{
    //propiedades(caracteristicas del objeto) public/private/protected
    public color: string;
    public modelo: string;
    public marca:string;
    public talla: string;
    public precio: number;
    //metodo (funciones o acciones del objeto) metodo para cambiar color

    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color
    }
}

// var playera = new Camiseta();
// playera.color = "Rojo";
// playera.modelo = "Manga corta";
// playera.marca = "Nike";
// playera.talla = "L";
// playera.precio = 10;

var playera = new Camiseta ();
playera.setColor("Rojo");
// playera.getColor();--> para conseguir el color


console.log(playera)



export class Employee {
    public name: string;
    public lastName: string;
    protected code: number;

    constructor(name: string, lastName: string, code: number){
        this.name = name;
        this.lastName = lastName;
        this.code = code;
    }
}

// var employee1 = new Employee("Jose","Gonzalez", 123);
// var employee2 = new Employee("Maria","Salazar", 321);
// console.log(employee1, employee2);