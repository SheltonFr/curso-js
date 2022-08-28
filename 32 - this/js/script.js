/**
 * Fora de escopo local o this referencia o objecto global Window
 */

// alert('Ola');
// this.alert('Ola 2');


var text = 5;
console.log(text);
console.log(this.text);

let pessoa = {
    nome: 'Shelton',
    idade: 19,

    // metodo do nosso objecto
    falar: function () {
        console.log('Ola');
    },

    dizerNome: function () {
        console.log(`Meu nome: ${this.nome}`);
    },

    aniversario: function () {
        this.idade += 1;
    },
};

pessoa.dizerNome();
console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);