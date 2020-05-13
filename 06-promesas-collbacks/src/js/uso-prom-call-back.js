import './styles.css';
// import { buscarHeroe } from './js/callbacks';
import { buscarHeroe } from './js/promesas';






//=======================CALLBACKS==========================================
// const heroeId = 'batman';
// const heroeId1 = 'iroman';
// const heroeId2 = 'spiderman';



// buscarHeroe(heroeId, (err, heroe) => {

//     if (err) { return console.error(err); }

//     buscarHeroe(heroeId1, (err, heroe1) => {

//         if (err) { return console.error(err); }

//         buscarHeroe(heroeId2, (err, heroe2) => {

//             if (err) { return console.error(err); }

//             console.log(`Enviando a ${heroe.nombre} y ${heroe1.nombre} y ${heroe2.nombre} a la mision`);

//         });
//     });


// });
// =============================FIN DE LOS CALLBACKS==================================================

const heroeId = 'batman';
const heroeId1 = 'iroman';
const heroeId2 = 'spiderman';

// buscarHeroe(heroeId).then(heroe => {
//     // console.log(`Enviando a ${heroe.nombre} a la mision`);
//     buscarHeroe(heroeId1).then(heroe1 => {
//         console.log(`Enviando a ${heroe.nombre} y ${heroe1.nombre} a la mision`);

//     })

// });

Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId1)])
    .then(([heroe, heroe1]) => {

        console.log(`Enviando a ${heroe.nombre} y ${heroe1.nombre} a la mision`);

    }).catch(err => {
        alert(err);
    }).finally(() => {
        console.log('Se termino el promise.all');

    })


console.log('Fin del programa');