const readline = require('readline-sync');
let num;
while(true){

 num = parseInt(readline.question('Introduce un año: '), 10);

if (isNaN(num)) {
    console.log("Por favor, inserte un año válido.")
}else{
    break;

}
} 
    if((num % 4 === 0 && num % 100 !== 0) || (num % 400 === 0)) {
        console.log("Es un año bisiesto");
    } else {
        console.log("No es un año bisiesto");
    }

