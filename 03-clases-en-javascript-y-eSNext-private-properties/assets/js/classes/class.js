 class Persona {

     static _conteo = 0;
     static get getConteo() {
         return Persona._conteo + ' Instancia';
     }

     static mensaje() {
         console.log('Metodo estatico');

     }

     nombre = '';
     codigo = '';
     frase = '';
     comida = '';

     constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'ssin frase') {
         //  console.log('Hola');
         this.nombre = nombre;
         this.codigo = codigo;
         this.frase = frase;

         Persona._conteo++;
     }

     set setComidaFavorita(comida) {
         this.comida = comida.toUpperCase();
     }
     get getComidaFavorita() {
         return `La comida favorita de ${this.nombre}, es: ${this.comida}`;
     }

     quienSoy() {
         console.log(`Mi nombres es ${this.nombre}, y mi codigo es este ${this.codigo}`);

     }
     miFrae() {
         this.quienSoy();
         console.log(`${this.codigo} dice : ${this.frase}`);

     }
 }

 const persona = new Persona('javier', 'humano', 'loquesea');
 const persona1 = new Persona('javier1', 'humano1', 'loquesea1');
 const persona2 = new Persona('javier1', 'humano1', 'loquesea1');


 //  console.log(persona);
 //  console.log(persona1);

 //  persona.miFrae();
 //  persona1.miFrae();

 //  persona.setComidaFavorita = 'El viche es la comida favorita';
 //  console.log(persona);
 //  console.log(persona.getComidaFavorita);

 // Persona._conteo = 2;
 console.log('Conteo Statico', Persona._conteo);
 console.log(Persona.getConteo);

 Persona.mensaje();