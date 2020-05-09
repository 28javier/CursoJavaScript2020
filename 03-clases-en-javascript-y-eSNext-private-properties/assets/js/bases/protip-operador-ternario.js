const elMayor = (a, b) => {
    return (a > b) ? a : b;
}

const tieneMembresia = (miembro) => {
    return (miembro) ? '2$' : '10$';
}
console.log(elMayor(20, 15));
console.log(tieneMembresia(true));

const amigo = false;
const amigosArr = [
    'javier',
    'grace',
    'eder',
    'brayan',
    amigo ? 'javier' : 'brayan',
    elMayor(13, 12)
];
console.warn('Es amigo si o no');
console.log(amigosArr);


const notas = 100; // A, A+, B .......
const grado = notas >= 95 ? 'A+' :
    notas >= 90 ? 'A' :
    notas >= 85 ? 'B+' :
    notas >= 80 ? 'B' :
    notas >= 75 ? 'C+' :
    notas >= 70 ? 'C' : 'REPROBADO';

console.log({ notas, grado });