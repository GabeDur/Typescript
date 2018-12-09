Typescript ver. 2.5.3

Creación de proyecto:

	tsc --init

compilacion individual

	tsc archivo.ts
	
***compilacion general***


1-Añadir al archivo de configuración

	"compilerOptions":{
	    "outDir": "./js"
	},
	"include":[
	    "./src/*.ts"
	]
	
2-Ejecutar el comando

	tsc --watch