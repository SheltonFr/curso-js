// declarando variaveis
var teste = 1;
// fracamente tipada
teste = 'Mateus';

/** variavel global, nao recomendado por poder sobrescrever variaveis em outros escopos*/ 
nome = 'Shelton';
var sobreNome;
sobreNome = 'Francisco';

console.log(teste);
console.log(nome);
console.log(sobreNome);