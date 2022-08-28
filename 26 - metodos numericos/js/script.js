/**
 *  O objecto number, pai dos numeros,contem metodos uteis para trabalhar com numeros em js;
 *  A maioria dos tipos de dados tambem tem um objrcto pai, como: String, Objecto e Array
 */

// parseFloat -  transorma um valor em numero decimal

console.log(parseFloat('12.33')); // transforma a String em um numero flutuante
console.log(Number.parseFloat('12.33')); // podemos chamar o objecto tambem

// parseInt
console.log(parseInt('12'));
console.log(parseInt('16.33'));

// toFixed('numero de casas decimais') - limita as casas decimais em um numero
console.log(23.4432124.toFixed(2));

// isNaN - verificar se nao e numero ou nao

console.log(isNaN(112)); // false
console.log(isNaN('teste')); // true

// MAX_VALUE e MIN_VALUE -- fora desse intervalo o js retorna +/- infiity
console.log(Number.MAX_VALUE); // numero maximo suportado
console.log(Number.MIN_VALUE); // menor numero suportado