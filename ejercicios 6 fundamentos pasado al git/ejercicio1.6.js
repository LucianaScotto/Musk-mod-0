const readline = require('readline-sync');

let i;

while (true) { 
    i = readline.question("Introduce un número: ");
    
    if (isNaN(i)) {
        console.log("No es un número. Por favor, introduce un número.");
    } else {
        i = Number(i); 
        break; 
    }
} 

if (i === 0) {
    console.log("El número es cero, que es neutro y par.");
} else {
    
    if (i % 2 === 0 && i > 0) {
        console.log("El número es positivo y par.");
    } else if (i % 2 === 0 && i < 0) {
        console.log("El número es negativo y par.");
    } else if (i % 2 !== 0 && i > 0) {
        console.log("El número es positivo e impar.");
    } else if (i % 2 !== 0 && i < 0) {
        console.log("El número es negativo e impar.");
    }
    if (i > 1000000) {
        console.log("¡Ese número es realmente grande!");
    } else if (i < -1000000) {
        console.log("¡Ese número es realmente pequeño!");
    }
}
