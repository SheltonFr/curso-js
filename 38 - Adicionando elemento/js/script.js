/**
 *  Podemos inserir um elemento dentro de outro;
 *  Isso é cosiderado como 'acresenctar um filho' em JS
 */

// criar elemento
var elemento = document.createElement('div');

// essa propriedade nos permite acessar, ou adicionar  classes
elemento.classList = 'div-criada';
console.log(elemento)

// pegar um elemento pai
var container = document.querySelector('#container');

// inserido elemento filho
container.appendChild(elemento)

// insereBefore - inserir elemeto antes
var elemento2 = document.createElement('div');
elemento2.classList = 'div-before';

var elemento3 = document.querySelector('#container .div-criada');
// elementoPai.insertBefore(elemento inserido, elemento referencia)
container.insertBefore(elemento2, elemento3);