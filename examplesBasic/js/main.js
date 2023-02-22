"use strict";
exports.__esModule = true;
var index1_1 = require("./index1");
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplication inprogress of js");
    }
    Main.prototype.getEmployee = function () {
        return new index1_1.Employee("Monica", "Blanco", 456);
    };
    return Main;
}());
var main = new Main();
