Typescript ver. 2.5.3

Creacion de proyecto:
	tsc --init


compilacion individual
	tsc archivo.ts
	
/*********compilacion general*****************/
1-Añadir al archivo de configuracion
	"compilerOptions":{
	    "outDir": "./js"
	},
	"include":[
	    "./src/*.ts"
	]
2-Ejecutar el comando
	tsc --watch
