class Persona {

    static porObjeto(persona) {
            return new Persona(persona.nombre, persona.apellido, persona.pais);
        }
        // static porObjeto({nombre, apellido, pais}){
        //     return new Persona(nombre, apellido, pais); 
        // }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;

    }


    getInfo() {
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);

    }
}

const nombre1 = 'javier',
    apellido1 = 'velez',
    pais1 = 'ecuador';

const objeto = {
    nombre: 'javier1',
    apellido: 'velez1',
    pais: 'ecuador1'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(objeto);

persona1.getInfo();
persona2.getInfo();