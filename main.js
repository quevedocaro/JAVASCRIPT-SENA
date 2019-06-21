var arreglocarros=[
	{
		marca:"BMW",
		referencia:"M3",
		modelo:2015,
		numchasis:2345	
	},
	{
		marca:"AUDI",
		referencia:"A3",
		modelo:2019,
		numchasis:4567
	},
	{
		marca:"CHEVROLET",
		referencia:"CAPTIVA",
		modelo:2017,
		numchasis:56787
	}
]


for (var i = 0; i < arreglocarros.length; i++) 
	{	
		if (arreglocarros[i].modelo < 2019) {
			alert("Su carro es"+ 
				arreglocarros[i].modelo+
				arreglocarros[i].marca)
			alert("Tiene que pagar 100mil de tecnomecanica")
		}else{
			alert("Su carro es"+ 
				arreglocarros[i].modelo+
				arreglocarros[i].marca)
			alert("su carro es muy nuevo debe pagar 300mil")

		}
		/*alert(arreglocarros[i].marca+" "+
			arreglocarros[i].modelo)*/
	}





/*alert("estamos empezando a usar git")

console.log("ahora vamos a subir nuestros archivos")

var persona ={	
	nombre:"chavo", 
	apellido:"del ocho",
	cedula: "123456789",
	edad:15
	}

alert("el nombre es: " + persona.nombre)

	if(persona.edad >=18)
	{
		alert(persona.nombre+" es mayor de edad")
	}else{
		alert(persona.nombre+" es menor de edad")
	}
*/
