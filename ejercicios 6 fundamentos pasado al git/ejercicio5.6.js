const readline = require('readline-sync');

let frase;
while (true) {
    frase = readline.question('Introduce una frase: ');

    if (typeof frase !== 'string' || frase.trim() === '' || !/[a-zA-Z]/.test(frase)) {
        console.log("Por favor, introduce una frase que contenga al menos una letra.");
    } else {
        break;  
    }
}

const vocales = ['a', 'e', 'i', 'o', 'u'];
const fraseMinusculas = frase.toLowerCase();
let contadorVocales = 0;

for (let i = 0; i < fraseMinusculas.length; i++) {
    const caracter = fraseMinusculas[i];
    if (vocales.includes(caracter)) {
        contadorVocales++;
    }
}

console.log(`El número de vocales es ${contadorVocales}.`);

