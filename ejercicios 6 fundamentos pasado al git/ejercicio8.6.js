const readline = require('readline-sync');
let altura = parseInt(readline.question('Introduce la altura del rectángulo: '));
let anchura = parseInt(readline.question('Introduce la anchura del rectángulo: '));


function dibujarRectangulo(altura, anchura) {

    console.log('*'.repeat(anchura));

    for (let i = 1; i < altura - 1; i++) {
        console.log('*' + ' '.repeat(anchura - 2) + '*');
    }

  
    if (altura > 1) {
        console.log('*'.repeat(anchura));
    }
}

if (altura > 0 && anchura > 0) {
    dibujarRectangulo(altura, anchura);
} else {
    console.log('La altura y la anchura deben ser números enteros mayores que 0.');
}
