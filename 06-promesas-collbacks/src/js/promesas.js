const heroes = {
    batman: {
        nombre: 'javier',
        poder: 'inteligente'
    },
    iroman: {
        nombre: 'javier1',
        poder: 'inteligente1'
    },
    spiderman: {
        nombre: 'javier2',
        poder: 'inteligente2'
    }
};

// forma promesa
// export const buscarHeroe = (id) => {

//     const heroe = heroes[id];


//     return new Promise((resolve, reject) => {
//         if (heroe) {
//             resolve(heroe);
//         } else {
//             reject(`No existe un heroe con el id: ${id}`);
//         }
//     });

// }

export const buscarHeroe = (id) => {

    const heroe = heroes[id];


    return new Promise((resolve, reject) => {
        if (heroe) {
            setTimeout(() => {
                resolve(heroe);
            }, 1000)
        } else {
            reject(`No existe un heroe con el id: ${id}`);
        }
    });

}

// forma con el async
export const buscarHeroeAsync = async(id) => {

    const heroe = heroes[id];

    if (heroe) {
        return heroe;
    } else {
        throw `No existe un heroe con el id: ${id}`;
    }


}





// promesas

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa lenta');
    }, 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa Media');
    }, 1500);
});
const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa Rapida');
    }, 1000);
});


export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}