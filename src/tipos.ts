//let nombre_variable : tipo = valor

let edad:number=34;
let nombre:string="Gabriel";

//uso de string con multiples lineas
let descripcion:string=`
   carrera matematicas aplicadas a la computacion
   desarrollo web
`;

//usar variables dentro de string
let saludo:string = `Bienvenido ${nombre}`

let vip:boolean = true;

let lenguajes:string[]=["javascript","java","python","C"];
let semana:Array<string>;
semana=["Lunes","Martes","Miercoles","Jueves","Viernes"];

let generica:any;
generica=8;
generica="texto";
generica=true;
generica=['aprobado','reprobado','np'];

const PI:number = 3.141516;


console.log("la descripcion es: ", descripcion);
console.log("", saludo);
console.log("Hoy es: ", semana[0]);
console.log("primer lenguaje: ", lenguajes[0]);
console.log("PI= ", PI);