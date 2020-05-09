function saludar() {
    console.log('Hola mundo');

}

saludar();

// ===============================

//funciones felcha

const saludar3 = () => {
    console.log('Saludar 3');
}
saludar3();


// =====================

const saludar4 = (nombre) => {
    console.log('Saludar ' + nombre);
}
saludar4('javier');





// ==================================
function saludar2(nombre) {
    console.log(arguments);

    console.log('Hola ' + nombre);
    return 1;

}

const returnSaludar = saludar2('javier', true, 40, 'sjwjsw');
console.log({ returnSaludar });

// =======================

// function saludar2(nombre) {
//     console.log('Hola ' + nombre);

// }

// saludar2('javier');


// ======================================


//funcion anonima

let saludar5 = function() {
    console.log('Hola mundo2');

}


saludar5();



function sumar(a, b) {
    return a + b;
}
console.log(sumar(2, 5));


const sumar1 = (a, b) => {
    return a + b;
}
console.log(sumar1(2, 5));

const getAlertorio = () => {
    return Math.random();
}
console.log(getAlertorio());


const getAlertorio1 = () => Math.random();
console.log(getAlertorio1());