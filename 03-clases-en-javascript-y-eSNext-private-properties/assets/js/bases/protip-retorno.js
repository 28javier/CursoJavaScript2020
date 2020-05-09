function crearPersonas(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}
const persona = crearPersonas('javier', 'velez');
console.log(persona);


const crearPersonas1 = (nombre, apellido) => ({ nombre, apellido })
const persona1 = crearPersonas1('javier', 'velez');
console.log(persona1);



function imprimirArgumentos() {
    console.log(arguments);
}
imprimirArgumentos('javier', 23, 'velez', true);


const imprimirArgumento2 = (...arguments) => {
    console.log(arguments);
}
imprimirArgumento2('javier', 23, 'velez', true);



const imprimirArgumento3 = (nombre, ...arguments) => {
    console.log({ nombre, arguments });
}
imprimirArgumento3('javier', 23, 'velez', true);


const imprimirArgumento4 = (nombre, ...arguments) => {
    // console.log({ nombre, arguments });
    return arguments;
}
const arg = imprimirArgumento4('javier', 23, 'velez', true);
console.log({ arg });



const imprimirArgumento5 = (nombre, ...arguments) => {
    // console.log({ nombre, arguments });
    return arguments;
}
const [edad, apellido, casado] = imprimirArgumento5('javier', 23, 'velez', true);
console.log({ edad, apellido, casado });



// protis

const { apellido: nuevoApellido } = crearPersonas('javier', 'velez');
console.log({ nuevoApellido });



const javier = {
    nombre: 'javier',
    apellido: 'velez',
    vivo: false,
    edad: 25,
    juegos: ['jg1', 'jg2', 'jg3', 'jg4']
};

// const imprimePropiedades = (personaje) => {
//     console.log('nombre ', personaje.nombre);
//     console.log('apellido ', personaje.apellido);
//     console.log('vivo ', personaje.vivo);
//     console.log('edad ', personaje.edad);
//     console.log('juegos ', personaje.juegos);
// }
// console.log(javier);


const imprimePropiedades = ({ nombre, apellido, vivo, edad, juegos }) => {
    console.log({ nombre });
    console.log({ apellido });
    console.log({ vivo });
    console.log({ edad });
    console.log({ juegos });
}
console.log(javier);