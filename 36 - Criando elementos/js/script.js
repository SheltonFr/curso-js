/**
 *  O JS e o DOM tambem possibilitam a criacao de elemetos;
 *  O texto de um elemento é considerado um nó na arvore do DOM;
 *  Ou seja, temos que criar o texto do elemento tambem.
 *  (entao temos os seguintes passos: criar elemento - criar texto - inserir o texto no elemento - inserir o elemento em alguma tag pai);
 */

// criando o elemento p
var novoParagrafo = document.createElement('p');

// criando o nó de texto
var texto = document.createTextNode('Paragrafo  criado pelo Js');

// inserindo o texto no novoParagrafo
novoParagrafo.appendChild(texto);

// inserido o novoParagrafo no body do html
var body = document.querySelector('body');
body.appendChild(novoParagrafo);

// inserir em uma div (os passos sao EXACTAAMENTE os mesmos)

var container = document.querySelector('#container');

var el = document.createElement('span');
el.appendChild(document.createTextNode('Span criado pelo js'))
container.appendChild(el);