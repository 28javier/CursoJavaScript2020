const personaje = {
    nombre: 'javier',
    apellido: 'velez',
    vivo: false,
    edad: 25,
    cordenadas: {
        lat: 34.034,
        lng: -118.70
    },
    juegos: ['jg1', 'jg2', 'jg3', 'jg4'],
    direccion: {
        zip: '12939, 2321',
        ubicacion: 'manta'
    }
};

console.log(personaje);

console.log('El nombre de est persona es: ', personaje.nombre);
console.log('El nombre de est persona es: ', personaje['nombre']);
console.log('La edad de est persona es: ', personaje.edad);
console.log('Coordenadas ', personaje.cordenadas);
console.log('Coordenadas ', personaje.cordenadas.lat);

console.log('# juegos: ', personaje.juegos.length);
console.log('Ultimo Juego: ', personaje.juegos[personaje.juegos.length - 1]);


const x = 'vivo';
console.log('Vivo', personaje[x]);

// mas detalles


delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriPares = Object.entries(personaje);
console.log(entriPares);

// personaje = true;


Object.freeze(personaje);

personaje.dinero = 1000000;
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades, valores });