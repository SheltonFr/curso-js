var nome = "Shelton";
var sobreNome = "Francisco";
console.log(typeof nome);


// concatenando
var nomeCompleto = nome + " " + sobreNome;
console.log(nomeCompleto);

/*
    podemos usar:
    ''
    ""
    `` - tem funcionalidade especial
*/

document.write(`Ola ${nomeCompleto} <br>`);
document.write('Seu nome: ' + nome);