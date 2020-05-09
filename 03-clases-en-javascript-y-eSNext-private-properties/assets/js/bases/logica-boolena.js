const regresaTrue = () => {
    console.log('Es verdadero');
    return true;
}



const regresaFalse = () => {
    console.log('Es falso');
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaTrue());

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); //true
console.log(true && false); //false
console.log(true && !false); //true

console.log('====================');
console.log(regresaFalse() && regresaTrue()); //false

console.log('====================');
console.log(regresaTrue() && regresaFalse()); //false
console.log('4 condiciones', true && true && true && false); //false


console.warn('OR'); // TRUE
console.log(true || false);
console.log(false || false);
console.log(false || true);

console.log('====================');
console.log(regresaFalse() || regresaTrue()); //true

console.log('====================');
console.log(regresaTrue() || regresaFalse()); //true
console.log('4 condiciones', true || true || true || false); //verdadero

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false && 'hola mundo' && 150; //false
const a2 = 'hola' && 'mundo' && soyFalse && true; //false
const a3 = soyFalse || 'ya no soy falso';
const a4 = soyFalse || soyNull || soyUndefined || 'ya no soy falso de nuevo';
const a5 = soyFalse || regresaTrue() || soyUndefined || 'ya no soy falso de nuevo';

console.log({ a1, a2, a3, a4, a5 });

if (true || true || true || false) {
    console.log('Hacer algo');

} else {
    console.log('Hacer otra cosa');

}