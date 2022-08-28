/**
 *  Acessar o DOM caracteriza-se por identificar um elemento do HTML atraves de metodos;
 *  Depos podemos manipula-los da forma que quisermos;
 *  Acessar o DOM é semenhante as refras de css;
 *  Podemos acessar por: tags, ids, classes;
 */

// tag
/** getElementsByTagName('tag') - retorna um HTMLCollection com todos os elementos correspondetes a tag passada. usamos o indices [indice] para especificar qual queremos*/
var titulo = document.getElementsByTagName('h1')[0];
console.log(titulo);

// id - 
/**  getElementById('#id') - retorna o elemento correspodente ao id*/

var lista = document.getElementById('lista');
console.log(lista);

// class
/** getElementsByClassName('.class') - retorna um HTMLCollection com todos os elementos correspondetes a class passada. usamos o indices [indice] para especificar qual queremos*/
var items = document.getElementsByClassName('item');
console.log(items);