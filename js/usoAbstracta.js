"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//{nombre_clase} from "nombre_archivo"
var abstracta_1 = require("./abstracta");
var UsoAbstracta = /** @class */ (function (_super) {
    __extends(UsoAbstracta, _super);
    function UsoAbstracta(nombre) {
        return _super.call(this, nombre) || this;
    }
    UsoAbstracta.prototype.area = function (lado) {
        console.log("el area es ", lado * 2);
    };
    return UsoAbstracta;
}(abstracta_1.Abstracta));
var cuadrado;
cuadrado = new UsoAbstracta("cuadrado");
console.log("mi figura es un ", cuadrado.nombre);
cuadrado.area(1.2);
