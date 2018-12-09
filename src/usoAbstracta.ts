//{nombre_clase} from "nombre_archivo"
import {Abstracta} from "./abstracta"; 

class UsoAbstracta extends Abstracta{
	constructor(nombre: string){
		super(nombre);
	}
	area(lado : number): void{
		console.log("el area es ", lado*2);
	}
}

let cuadrado:Abstracta;
cuadrado = new UsoAbstracta("cuadrado");

console.log("mi figura es un ", cuadrado.nombre);
cuadrado.area(1.2);