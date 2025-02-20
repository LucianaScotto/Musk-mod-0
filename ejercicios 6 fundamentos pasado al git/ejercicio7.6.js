const readline = require('readline-sync');
let altura;

while (true) {
    altura = parseInt(readline.question('Introduce la altura del triángulo: '), 10);

    if (isNaN(altura) || altura <= 0) {
        console.log('Por favor, introduce un número entero positivo.');
    } else {
        break;
    }
}

for (let i = 1; i <= altura; i++) {
    
    let espacios = ' '.repeat(altura - i);
   
    let linea = '*'.repeat(2 * i - 1);
    
    console.log(espacios + linea);
}
