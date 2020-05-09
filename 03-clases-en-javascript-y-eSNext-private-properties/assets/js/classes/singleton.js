class Singleton {
    static instancia; //undefined
    nombre = '';


    constructor(nombre = '') {

        // console.log(Singleton.instancia);
        const a = undefined;

        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
        // return this;

    }

}


const instancia1 = new Singleton('iromen');
const instancia2 = new Singleton('spiderman');

const instancia3 = new Singleton('bataman');
console.log(`nombre en la instancia 1 es: ${instancia1.nombre}`);
console.log(`nombre en la instancia 2 es: ${instancia2.nombre}`);

console.log(`nombre en la instancia 3 es: ${instancia3.nombre}`);