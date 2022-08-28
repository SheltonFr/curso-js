/**
 *  O click e activado quando o user clica em um element que atrelamos o evento;
 *  Apos a accao (por meio de uma callback) podemos fazer as modificacoes no HTML/CSS se quisermos
 */

var btn = document.querySelector('#btn');
console.log(btn);

btn.addEventListener('click', function() {
    console.log('CLICOU!!!');
    /**É uma callback pq so vai acontecer SE HOUVER um click ou seja, DEPENDE DE OUTRA ACCAO */

    // o this se refere ao proprio elemento
    console.log(this);
    this.style.color = 'red'
});

var title = document.querySelector('#title');
// click afetando outro elemento
title.addEventListener('click', function() {
    var subtitle = document.querySelector('#subtitle');
    subtitle.style.display = 'none';
});

// doublr click - dvlclick
var subtitle = document.querySelector('#subtitle');
subtitle.addEventListener('dblclick', function() {
    console.log('Double click');
})