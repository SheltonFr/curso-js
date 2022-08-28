/**
 *  Podemos com estas funcoes criar accos que executam depois de um tempo ou de tempos em tempos;
 *  Um dos argumentos destas funcoes é uma callback funcrion (neste caso é uma callback assincrona);
 */

// setTimeout

console.log('Antes do setTimeout');

/**
 * por ser uma callback assincrona, o programa nao espera que passe o tempo para poder executar ao outras instrucoes. Ou seja, as instrucoes sincronas(de execucao imediata) ganham prioridade
 */
setTimeout(function(){ // setTimeout(funcao[callback], tempoEspera)
    // é uma callback, porque depende do outra instrucao para ser executada
    console.log('Testando setTimeout');
}, 2000);

console.log('Depois do setTimeout'); // sera executado antes do setTimeout

// setInterval - tbm assincrona
setInterval(() => {
    console.log('testando setInterval');
}, 2000); // executa de 2 em 2 segundos

console.log('depois do setInterval');