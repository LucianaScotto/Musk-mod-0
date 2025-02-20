const readline = require('readline-sync');

const randomNumber = Math.floor(Math.random() * 10) + 1;

let intentos = 0;
let adivinado = false;

while (!adivinado) {
 
  console.log('He pensado un número del 0 al 10.¡Intenta adivinarlo!')
  let numerousuario = parseInt(readline.question('Adivina: '));

  intentos++;  

  
  if (numerousuario === randomNumber) {
    console.log(`¡Felicidades! Has acertado el número en ${intentos} intento(s).`);
    adivinado = true; 
  } else {
    console.log('Número incorrecto. Intenta de nuevo.');
  }
}
