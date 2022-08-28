/**
 *  É muito comum alterar CSS com js tambem;
 *  As regras de css ficam em forma de linha; (estilo in-line)
 *  Substituindo a maioria das outras regras criadas
 */

// selecionar elemento
var title = document.querySelector('#title');

// adicionar o estilo
title.style.color = "red";

// propriedades com mais de uma palavra (background-color), passam para camelCase;
title.style.backgroundcColor = 'yellow';

// adicionar varios estilos
var sub = document.querySelector('#subtitle');

sub.style.cssText = "color: blue; background-color: red; font-size: 2em; text-align: center";
