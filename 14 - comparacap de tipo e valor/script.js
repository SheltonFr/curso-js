/**
 * 
 *  comparam as variaveis quanto ao seu tipo e seu valor
 *   ===
 *   !==
 */

var numero = '5';

if(numero === 5){ // false - pois numero é string, e 5 é number
    console.log('===');
}

if(numero == 5) { // true, posis apesar de serem de tipos deiferentes, possuem o mesmo valor
    console.log('==');
}