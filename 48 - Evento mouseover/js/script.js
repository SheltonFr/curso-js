/**
 *  O mouseover e actu=ivado quando o ponteiro do mouse passa em cima do elemento em que atrelamos o evento;
 *  Tambek temos o evento mouseout que e quando o ponteiro sai do elemento
 */

var title = document.querySelector('#title');

title.addEventListener('mouseover', () => {
    title.style.cssText = 'color: white;background-color: black';

    // usando uma arow function '() =>' o 'this', vai se referir ao window, e nao ao obj title
})

title.addEventListener('mouseout', function() {
    this.style.cssText = 'color: black; background-color: white';
});