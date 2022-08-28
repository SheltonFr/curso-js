// length - propriedade

var nome = 'Shelton';
console.log(nome.length);

// indexOf('str') - retorna o indice onde comeca a str
console.log(nome.indexOf('ton'));

// slice(firstIndex, lastIndex) - retorna string nesse intervalo
// slice(firstIndex) - retorna string desde o indeice dado, ate ao ultimo
console.log(nome.slice(4, 6)); // to
console.log(nome.slice(2)); // elton

//replace(str, str)
var frase = 'O rato roeu a rolha da garrafa do rei da Russia';
var novaFrase = frase.replace('Russia', 'Mozambique');
console.log(novaFrase);