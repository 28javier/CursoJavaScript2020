const javier = {
    nombre: 'javier',
    edad: 25,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);

    }
}




const grace = {
    nombre: 'grace',
    edad: 24,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);

    }
}

// javier.imprimir();
// ok esto se debe crear con la palabra reservada new
function Persona(nombre, edad) {
    console.log('Se ejecuto esta alinea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}
const maria = new Persona('maria', 18);
const javier1 = new Persona('javier', 25);

console.log(maria);
maria.imprimir();
javier1.imprimir();