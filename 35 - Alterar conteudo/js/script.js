/**
 *  Podemos alterar o texto de qualquer elemento de forma facil com js;
 * Posteriormente poderemos atrelar esta accao com algum evento
 */
// selecionar o elemento
var title = document.querySelector('#title');
var subtitle = document.querySelector('#subtitle');


// formas de alterar texto

// innerHTML
title.innerHTML = "Testando o texto alterado!"

// textContent -> mais utilizado, recomendado e performatico
subtitle.textContent = 'Testando o text Content!';