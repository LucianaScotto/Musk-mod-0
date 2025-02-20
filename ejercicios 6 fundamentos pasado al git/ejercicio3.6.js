const readLine = require("readline-sync");

let num;
do {
    num = parseInt(readLine.question("Introduce un número entero no negativo: "));
    if (isNaN(num) || num < 0) {
        console.log("Por favor, introduce un número entero no negativo.");
    }
} while (isNaN(num) || num < 0); 

let factorial = 1;

while (num > 1) {
    factorial *= num && num-- ;  
          
}


console.log(`El factorial es ${factorial}.`);
