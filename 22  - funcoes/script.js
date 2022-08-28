
// similar aos metodos em java
function primeiraFuncao() {

    console.log('Primeira funcao');

}
primeiraFuncao();

function dizerNome(nome) {
    console.log(`O nome é ${nome}`);
}

dizerNome('Shelton');

function soma(a, b) {
    return a + b;
}

var a = soma(1,2);
console.log(a);

var f = function () {
    console.log('Outra forma de criar');
}
f(); //chamando