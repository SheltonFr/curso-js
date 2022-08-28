let pessoa = {
    nome: 'Shelton',
    idade: 29,

    // metodo do nosso objecto
    falar: function() {
        console.log('Ola');
    },

    somar: function(a, b) {
        return a + b;
    }
};

console.log(pessoa.nome);
pessoa.falar();

var soma = pessoa.somar(3,4);
console.log(soma);