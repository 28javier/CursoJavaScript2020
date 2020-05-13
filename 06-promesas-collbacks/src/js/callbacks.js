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

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    if (heroe) {
        callback(null, heroe);
    } else {
        // erro
        callback(`No existe un heroe con el id: ${id}`);
    }
    // callback(heroe);
}