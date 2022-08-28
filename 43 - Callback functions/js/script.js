/**
 *  Permite executar uma funcao depois de uma determinada accao;
 *  Conceito fundamental para entender a parte assincrona do JS
 */

function exibir(num) {
    console.log('A operacao resultou em: ' + num);
}

function somar(a, b, callback) {
    var op = a + b;
    callback(op);
}

function multiplicar(a, b, cb) {
    var op = a * b;
    cb(op);   
}

/** 
 *  Basicamente, callback é quando passamos uma funncao como argumento
 para outra funcao, que devera ser executado depois de alguma outra operacao interna. Evitando assim a repeticao desnecessaria de codigos
*/
somar(2,2, exibir);
multiplicar(2,2, exibir);