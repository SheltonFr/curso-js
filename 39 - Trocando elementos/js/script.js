/** 
 *  Podemos tambem trocar um elemento no DOM;
 *  Ou seja, substituir uma tag por outra e de modo bem facil
*/

// criar elemento
var el = document.createElement('h3');
el.classList = 'testando - classe';
el.appendChild(document.createTextNode('Esse e o texto'));
console.log(el);

// selecionar elemento que quero trocar
var title = document.querySelector('#title');
console.log(title);

// selecionar o elemento pai 
var pai = title.parentNode; // elemento pai de title
console.log(pai); // no caso, sera a tag body

// trocar elementos
pai.replaceChild(el, title); // (novo elemento, antigo elemento);

/**
 * Criar o novo elemento - Pegar o elemento a ser substituido - Pegar o pai - E substituir usando o metodo do pai (replaceChild()) 
 */