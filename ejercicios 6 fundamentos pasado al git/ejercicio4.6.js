const readline = require('readline-sync');

let num;
while (true) {
    num = parseInt(readline.question('Introduce un número: '));

    if (isNaN(num) || num <=0 ) {
        console.log("Introduce un número válido a partir del 1.");
    } else {
        break;
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
