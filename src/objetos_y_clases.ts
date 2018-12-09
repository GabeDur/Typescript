let persona:any={
	nombre:"Gabriel",
	edad:34,
	vip:true
}

//no se permite hacer asignación peros si mutaciones
persona.nombre="Gabe";
persona.edad=35;

//clase animal
class Animal{
	//utilizando un scope no es necesario hacer 
	//declaración de la variable nombre
	//ni asignación manual
	constructor(protected _nombre: string){
		
	}
	
	get nombre():string{
		return this._nombre;
	}
	
	caminar(direccion: string):void{
		console.log("me estoy moviendo hacia ", direccion);
	}
}

let gato : Animal;
gato = new Animal("Mechas");

console.log("yo soy ", persona);
console.log("mi gato se llama", gato.nombre);
gato.caminar("adelante");
