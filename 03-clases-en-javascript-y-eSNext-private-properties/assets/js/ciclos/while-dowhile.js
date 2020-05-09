const carros = ['ford', 'nissan', 'chevrolet', 'aveo', 'family'];
let i = 0;




console.warn('WHILE');

while (i < carros.length) {
    console.log(carros[i]);
    // i = i+1;
    i++;
}



console.warn('DO-WHILE');

let j = 0;
do {
    console.log(carros[j]);
    j++;

} while (j < carros.length);