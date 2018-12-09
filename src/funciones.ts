function sumar(sum1:number, sum2:number):void{
	console.log("la suma es ", sum1+sum2);
}

function resta(sum:number, res:number):number{
	return sum-res;
}


sumar(4,6);
sumar(4.2,6.1);

console.log("la resta de 78 y 12 es ", resta(78,12));
