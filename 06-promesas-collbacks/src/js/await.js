import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = [
    'batman',
    'iroman',
    'spiderman'
];
// const heroesPromesas = heroesIds.map( id=> buscarHeroe(id));
const heroesPromesas = heroesIds.map(buscarHeroe);

// export const obtenerHeroesArr = async() => {

//     const heroesArr = [];

//     for (const id of heroesIds) {

//         const heroe = await buscarHeroe(id);
//         heroesArr.push(heroe);
//     }




//     return heroesArr;
// };


// mejorar tiempo de rspuesta
// export const obtenerHeroesArr = async() => {
//     const heroesArr = [];
//     for (const id of heroesIds) {

//         heroesArr.push(buscarHeroe(id));
//     }
//     return await Promise.all(heroesArr);
// };


// mismo procedimineto del codigo de arriba pero ma elegante
export const obtenerHeroesArr = async() => {

    return await Promise.all(heroesIds.map(buscarHeroe));
};

export const obtenerHeroeAwait = async(id) => {

    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;

    } catch (err) {
        console.log('CASTH!!!!!!!!!!');
        throw err;

    }
}

export const buscarCiclo = async() => {

    console.time('HeroesCiclos');

    for await (const heroe of heroesPromesas) {
        console.log(heroe);

    }
    // const heroes = await Promise.all(heroesPromesas);
    // // console.log(heroes);
    // heroes.forEach(heroe => console.log(heroe));
    console.timeEnd('HeroesCiclos');
}

export const heroeIfAwait = async(id) => {

    if ((await buscarHeroeAsync(id)).nombre === 'Batman') {
        console.log('Es el mejor de todos');
    } else {
        console.log('Naaaaa');

    }
};