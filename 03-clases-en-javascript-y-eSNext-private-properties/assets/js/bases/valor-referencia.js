let a = 10;
let b = a;
a = 30;
console.log({ a, b });


let juan = { nombre: 'juan' };
let ana = {...juan };
ana.nombre = 'ana';
console.log({ ana, juan });

const cambiarNombre = ({...persona }) => {
    persona.nombre = 'javier';
    return persona;
}

let peter = { nombre: 'carlisto' };
let tony = cambiarNombre(peter);

console.log({ peter, tony });


//arreglos 
const frutas = ['manzana', 'pera', 'melon'];

// const otrasFrutas = [...frutas];
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas1 = [frutas];
console.timeEnd('spread');

otrasFrutas.push('mango');

console.table({ frutas, otrasFrutas });