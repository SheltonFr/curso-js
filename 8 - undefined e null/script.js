// Sao considerados como tipos de dados em javascript

/**
 * null - é um tipo de dado que representa um valor
 * undefined - é umtipo de dado para uma variavel com valor nao atribuido
 */

/*Hosting - içamento - todas as variaves e funcoes sao levadas para o topo do codigo, antes do conde ser interpretado */
console.log(nome); /**devido ao hosting, a variavel esta undefined mesmo que seja usada 'antes de ser declarada' (declara mas nao inicializa) */

var nome = null; // null
var sobreNome; // undefined

console.log(nome);
console.log(sobreNome); 

nome = 'Matheus';
sobreNome = 'Battisti'

console.log(nome);
console.log(sobreNome);