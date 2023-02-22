import {Employee} from './index1';

class Main{
    constructor (){
        console.log("Aplication inprogress of js");
    }
    getEmployee(){
        return new Employee("Monica", "Blanco", 456);
    }
}

var main = new Main();