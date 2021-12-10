// funcion para solicitar datos al usuario
//Ylet = edad = prompt('Ingresa tu edad');

//console.log(edad);
//let nombre = prompt('Ingresa tu nombre');

//let strring = `Buenas noches ${nombre}`;

//alert(strring);

// Si un número es par, quiero que en la consola se escriba el número y un mensaje cualquiera. Y si no es par, quiero que me muestre una alerta diciéndome que repiense mi vida

//let numero = prompt('Ingresar un numero');

// if (numero % 2 == 0) {
// 	let strring = `${numero} es par y es bonito`;
// 	console.log(strring);
// } else if (numero % 2 != 0) {
// 	alert('Repiensa tu vida');
// }

let nombre = prompt('Ingresa tu nombre');
let apellido = prompt('Ingresa tu apellido');
let edad = prompt('Ingresar tu edad');

if (edad >= 18) {
	let strring = `Hola ${nombre} ${apellido} tienes ${edad} años y eres mayor de edad`;
	alert(strring);
} else if (edad < 18) {
	let anotherStrring = `Hola ${nombre} ${apellido} tienes ${edad} años y eres menor de edad`;
	alert(anotherStrring);
}
