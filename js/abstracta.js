"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Abstracta = /** @class */ (function () {
    function Abstracta(_nombre) {
        this._nombre = _nombre;
    }
    Object.defineProperty(Abstracta.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Abstracta;
}());
exports.Abstracta = Abstracta;
