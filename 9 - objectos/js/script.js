
// as chavetas determinam que a variavel é do tipo objecto 
var obj = {
    // propriedades
    nome: "Shelton",
    idade: 19,
    profissao: "Programador"
    // chave: valor
}; 

// acessando as propriedades do objecto

console.log(obj);
console.log(typeof obj);

console.log(`nome: ${obj.nome} \nidade: ${obj.idade} \nprofisao: ${obj.profissao}`);

// Atribuindo valore
obj.nome = 'Francisco';
console.log(obj.nome);

// adicionar propriedades
obj.graduacao = false;
console.log(obj);