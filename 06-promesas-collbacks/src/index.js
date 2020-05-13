// import { promesaLenta, promesaMedia, promesaRapida, buscarHeroe, buscarHeroeAsync } from './js/promesas';
import { obtenerHeroesArr, obtenerHeroeAwait, buscarCiclo, heroeIfAwait } from './js/await';

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(console.log).catch(console.warn);



// promesas
// buscarHeroe('batman')
//     .then(heroe => console.log(heroe))
//     .catch(console.warn);

// // async
// buscarHeroeAsync('iroman')
//     .then(heroe => console.log(heroe))
//     .catch(console.warn);



//await
// obtenerHeroesArr().then(console.table);


// await

// console.time('await');
// obtenerHeroesArr().then(heroes => {
//     console.table(heroes);
//     console.timeEnd('await');
// });

// await
// console.time('await');
// obtenerHeroeAwait('batman1').then(heroe => {
//     console.log(heroe);
//     console.timeEnd('await');
// }).catch(console.warn);

// await if y for
buscarCiclo();

heroeIfAwait('iroman');