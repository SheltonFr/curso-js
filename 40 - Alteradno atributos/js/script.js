/**
 *  Podemos alterar atributos via JS e DOM;
 *  Por exemplo: alterar atributo alt de uma imagem; *
 *  Ou ate um src de uma imagem;
 *  Todos os atributos podem ser alterados via JS;
 */

var title = document.querySelector('#title');
title.setAttribute('class', 'testando-atributo'); 
//setAtribute('chave[nome do atributo]', valor do atributo);
console.log(title);

// desabilitar botao
var btn = document.querySelector('#btn');
btn.setAttribute('disabled', 'disabled');

var subtitle = document.querySelector('#subtitle');
subtitle.setAttribute('id','titulo-2');

// remover atributo
var lista = document.querySelector('#lista');
lista.removeAttribute('id');