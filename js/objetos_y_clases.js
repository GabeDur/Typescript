"use strict";
var persona = {
    nombre: "Gabriel",
    edad: 34,
    vip: true
};
//no se permite hacer asignación peros si mutaciones
persona.nombre = "Gabe";
persona.edad = 35;
//clase animal
var Animal = /** @class */ (function () {
    //utilizando un scope no es necesario hacer 
    //declaración de la variable nombre
    //ni asignación manual
    function Animal(_nombre) {
        this._nombre = _nombre;
    }
    Object.defineProperty(Animal.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.caminar = function (direccion) {
        console.log("me estoy moviendo hacia ", direccion);
    };
    return Animal;
}());
var gato;
gato = new Animal("Mechas");
console.log("yo soy ", persona);
console.log("mi gato se llama", gato.nombre);
gato.caminar("adelante");
