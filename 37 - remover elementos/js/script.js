/**
 *  Temos como remover um elemento directamente, e tambem um elemento filho
 */

//removendo elemento filho
var container = document.querySelector('#container');
var p = document.querySelector('#container p');
container.removeChild(p);



// remover o elemento 
var subtitle = document.querySelector('h2');
subtitle.remove();