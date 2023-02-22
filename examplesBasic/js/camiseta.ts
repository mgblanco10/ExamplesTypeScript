//tsc --target ES5 --experimentalDecorators

// Interface
interface CamisetaBase {
    setColor(color: string): void;
    getColor(): string;
    estampacion(): void;
}

// Decorator
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
}

// Class (object model)
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase {
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    constructor(color: string, modelo: string, marca: string, talla: string, precio: number){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }

    public estampacion(): void {
        // The implementation of this method is provided by the @estampar decorator
    }
}

// Subclass
class Sudadera extends Camiseta {
    public capucha: boolean;

    setCapucha(capucha: boolean): void {
        this.capucha = capucha;
    }

    getCapucha(): boolean {
        return this.capucha;
    }
}

// Create and use objects
const camiseta = new Camiseta("fdas","fads","fdas","fas", 12);
console.log(camiseta);
camiseta.estampacion();

const sudadera_nike = new Sudadera("Rojo","Manga Larga", "Nike", "L", 30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris Jaspeado");

console.log(sudadera_nike);