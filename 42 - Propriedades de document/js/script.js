/**
 *  O objecto documento nao tem somente metodos;
 *  Podemos retirar varias informacoes diferentes das suas propriedades tambem;
 */

console.log(document.body);
console.log(document.head);
console.log(document.links); // HTMLCollection de links(PODE USAR INDICE)
document.links[0].textContent = 'Twitter';

console.log(document.URL);
console.log(document.title);
document.title = 'Aula 42'; // alterar o title da pagina