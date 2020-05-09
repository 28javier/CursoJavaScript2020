let a = 5;

if (a >= 10) {
    console.log('A es mayor o igual que 10');

} else {
    console.log('A es menor a 10');

}
// console.log('Fin del programa');


const hoy = new Date();
let dia = hoy.getDay();
console.log({ dia });

if (dia === 0) {
    console.log('domingo');

} else {
    console.log('No es domingo');

}

dia = 3;
const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}

console.log(diasLetras[dia] || 'dia no definido');

const diasLetras2 = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
console.log(diasLetras2[dia] || 'dia no definido');