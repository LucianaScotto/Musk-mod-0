const readLine = require("readline-sync");

let num1, num2, num3;

while (true) {
   
    num1 = parseInt(readLine.question("Introduce un número: "));
    num2 = parseInt(readLine.question("Introduce otro número: "));
    num3 = parseInt(readLine.question("Introduce otro número: "));

 
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Uno o más de los valores introducidos no son números. Inténtalo de nuevo.");
    } else {
        break;
    }
}if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log("Hay al menos un número par.");
} else {
    console.log("No hay números pares.");
}
    
    
