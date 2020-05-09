/*
 * los dias de semana se abren a las 11
 * los fines de semana a las 9
 */
// entra a un citio web para consultar si esta abieeto

const dia = 0; // domingo.....1:lunes...........
const horaActual = 8;


let horaApertura;
let mensaje; //Esta abierto, esta cerrado, hoy abrimos a las xxx...


// if (dia === 0 || dia === 6) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }
// resumir el cordigo con el operador ternario
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos  ${horaApertura}`;
// }
// resumir codigo con el operador ternario
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos  ${horaApertura}`;

console.log({ horaApertura, mensaje });