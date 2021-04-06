// En este ejercicio nos piden que diguamos si un número dado por el usuario es
// par o inpar y en el caso de que sea 0 marcarlo como que no es ni par, ni inpar.

// En pseudocódigo es de la siguiente manera:

//  Proceso Ejercicio04
	
//  	Definir numero1 Como Real;
	
//  	Escribir 'Dame un número al Azar';
//  	Leer numero1;
	
//  	Si numero1=0 Entonces
//  		Escribir 'Tu numero es cero por lo cual es neutro';
//  	SiNo
//  		Si numero1 MOD 2=0 Entonces
//  			Escribir 'Tu Número es par';
//  		SiNo
//  			Escribir 'Tu Número es inpar';
//  		FinSi
//  	FinSi
	
//  FinProceso


let num = parseInt(prompt ("Dame un número al azar"));

if (num == 0) {
  
    console.log ("El número que has elegido es 0 y este es neutro");

}else if (num % 2 == 0) {
  
    console.log ("El número " + num + " es par" );

}else 

    console.log ("El número " + num + " es impar");
