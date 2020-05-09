let juegos = ['jg1', 'jg2', 'jg3', 'jg4'];


console.log('Largo:', juegos.length); //largo de los elementos


let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log(primero, ultimo);

juegos.forEach((elemento, indice, arreglo) => {
    console.log({ elemento, indice, arreglo });

});

let nuevaLongitud = juegos.push('jg5');
console.log({ nuevaLongitud, juegos });


let nuevaLongitud1 = juegos.unshift('jg0');
console.log({ nuevaLongitud1, juegos });

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

let posicion = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(posicion, 2);
console.log({ juegosBorrados, juegos });

let buscarPosicion = juegos.indexOf('jg3');
console.log({ buscarPosicion });