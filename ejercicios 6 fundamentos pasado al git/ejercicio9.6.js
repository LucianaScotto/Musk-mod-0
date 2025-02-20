const readline = require('readline-sync');
const numerosenletras = ['Cero', 'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez'];

function solicitarnumero() {
  let numero;
  
  while (true) {
    let numero = readline.question('Introduce un número del 0 al 10:');
    
    if (!isNaN(numero) && numero >= 0 && numero <= 10) {
      console.log(numerosenletras[numero]);
      break;
    } else {
      console.log('Introduce un número válido entre 0 y 10.');
    }
  }
}

solicitarnumero();