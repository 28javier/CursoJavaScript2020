/*
 *2C = Two of Clubs (trebol) 
 *2D = Two of Diaminds (diamante)
 *2H = Two of Hearts (corazones)
 *2S = Two of Spades (espadas)
 */

// patron modulo y optimacizacion del codigp
const miModulo = (() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    // let puntosJugador = 0,
    //     puntosPc = 0;
    let puntosJugadores = [];

    //referencias del html

    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');


    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        smalls = document.querySelectorAll('small');
    // divPedirCartaJugador = document.querySelector('#jugador-cartas'),
    // divPedirCartaPc = document.querySelector('#jugadorPC-cartas'),



    // esta funcion me inicializa de nuevo la baraja
    const iniciaDeck = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
        smalls.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');
        // smalls[0].innerText = 0;
        // smalls[1].innerText = 0;

        // divPedirCartaJugador.innerHTML = '';
        // divPedirCartaPc.innerHTML = '';
        btnDetener.disabled = false;
        btnPedir.disabled = false;
    }

    // esta funcion me crea una baraja mesclada
    const crearDeck = () => {

        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }
        for (let tipo of tipos) {
            for (let especial of especiales) {
                deck.push(especial + tipo);
            }

        }
        // console.log(deck);
        deck = _.shuffle(deck);
        // console.log(deck);
        return deck;
    }

    // funcion para pedir cartas de la baraja

    const pedirCartas = () => {

            if (deck.length === 0) {
                throw 'No hay cartas en la naraja';
            }
            // console.log(deck);
            // console.log(carta);
            return deck.pop();
        }
        // saber el valor de las cartas
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);

        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10 :
            valor * 1;

        // let puntos = 0;
        // // console.log({ valor });
        // if (isNaN(valor)) {

        //     puntos = (valor === 'A') ? 11 : 10;

        // } else {

        //     puntos = valor * 1;

        // }
        // console.log(puntos);


    }

    // const valor = valorCarta(pedirCartas());
    // console.log({ valor });

    // el truno 0: es el jugador y el ultimo sera siempre la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        smalls[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    //crear cartas
    const crearCartas = (carta, turno) => {

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
        // divPedirCartaPc.append(imgCarta);
    }

    //tiempo de respuesta

    const determinarGanador = () => {

        const [puntosMinimo, puntosPc] = puntosJugadores
        setTimeout(() => {

            if (puntosPc === puntosMinimo) {
                alert('Nadie Gana!!!');
            } else if (puntosMinimo > 21) {
                alert('Computadora Gana, mejor suerte en la proxima');
            } else if (puntosPc > 21) {
                alert('Jugador Gana, genial lo lograste');
            } else {
                alert('Computadora Gana, mejor suerte en la proxima');

            }

        }, 4);
    }



    //turno computadora

    const turnoPc = (puntosMinimo) => {

        let puntosPc = 0;

        do {
            const carta = pedirCartas();
            puntosPc = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCartas(carta, puntosJugadores.length - 1);

            // puntosPc = puntosPc + valorCarta(carta);
            // smalls[1].innerText = puntosPc;
            // <!-- <img class="carta" src="./assets/cartas/10H.png" alt=""> -->
            // const imgCarta = document.createElement('img');
            // imgCarta.src = `assets/cartas/${carta}.png`;
            // imgCarta.classList.add('carta');
            // divPedirCartaPc.append(imgCarta);

            // if (puntosMinimo > 21) {
            //     break;
            // }

        } while ((puntosPc < puntosMinimo) && (puntosMinimo <= 21));

        // setTimeout(() => {

        //     if (puntosPc === puntosMinimo) {
        //         alert('Nadie Gana!!!');
        //     } else if (puntosMinimo > 21) {
        //         alert('Computadora Gana, mejor suerte en la proxima');
        //     } else if (puntosPc > 21) {
        //         alert('Jugador Gana, genial lo lograste');
        //     } else {
        //         alert('Computadora Gana, mejor suerte en la proxima');

        //     }

        // }, 4);
        determinarGanador();

    }


    //EVENTOS

    btnPedir.addEventListener('click', () => {

        const carta = pedirCartas();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCartas(carta, 0);

        // puntosJugador = puntosJugador + valorCarta(carta);
        // smalls[0].innerText = puntosJugador;
        // <!-- <img class="carta" src="./assets/cartas/10H.png" alt=""> -->
        // const imgCarta = document.createElement('img');
        // imgCarta.src = `assets/cartas/${carta}.png`;
        // imgCarta.classList.add('carta');
        // divPedirCartaJugador.append(imgCarta);

        if (puntosJugador > 21) {
            console.warn('Lo siento mucho perdistes');
            btnDetener.disabled = true;
            btnPedir.disabled = true;
            turnoPc(puntosJugador);
        } else if (puntosJugador === 21) {
            console.warn('21, Genial Ganaste!!!');
            btnDetener.disabled = true;
            btnPedir.disabled = true;
            turnoPc(puntosJugador);


        }
    });

    btnDetener.addEventListener('click', () => {
        btnDetener.disabled = true;
        btnPedir.disabled = true;

        turnoPc(puntosJugadores[0]);
    });


    btnNuevo.addEventListener('click', () => {

        // console.clear();
        iniciaDeck();
        // deck = [];
        // deck = crearDeck();
        // puntosJugador = 0;
        // puntosPc = 0;
        // smalls[0].innerText = 0;
        // smalls[1].innerText = 0;

        // divPedirCartaJugador.innerHTML = '';
        // divPedirCartaPc.innerHTML = '';
        // btnDetener.disabled = false;
        // btnPedir.disabled = false;

    });



    return {
        nuevoJuego: iniciaDeck
    };

})();