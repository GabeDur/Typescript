export abstract class Abstracta{
	constructor(protected _nombre: string){
	}
	get nombre():string{
		return this._nombre;
	}
	
	abstract area(lado:number): void;
}