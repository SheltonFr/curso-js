/**
 *  Com a evolucao da liguagem foram criados dois selectores com toda a complexidade desta accao;
 *  querySelector e querySelectorAll;
 *  Com estes podemos acessar os elementos baseados nas regras de CSS; 
 */


// querySelectorAll
// retorna uma NodeList com os elementos na 'regra de css' indeicado (como CSS)
var itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery);

// querySelector - pega o primeiro elemento correspondete a regra de css passada
var lista = document.querySelector('#lista');
console.log(lista)

