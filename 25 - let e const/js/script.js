
/**
 * let -  define variavel local, podendo ser declarada variaveis com mesmo nome dentro de um determinado escopo, sem akterar o valor da mesma vairiavel em outros escopos
 * 

    const - contante, nao pode ser alterado
 */

let x = 5; // var x = 5;

const y = 3;
//y = 4; retornara um erro 

if(true){
    // let - escopo local em bloco
    let x = 20;
    console.log(x);
}

console.log(x) // x = 5

