
/**
 *  sao considerados objectos em js, porem servem como listas;
 *  podemos ter itens de quelquer tipo de dado tambem;
 *  porem nao por chave e valor, mas sim por indeice;
 */

// [] -> Array, {} -> objecto
var arr = [5, "Shelton", false, {teste: 10, exame: 20}, "LECC21"];

console.log(arr);
///console.log(arr[3]);

// inserir elementos no array

arr[5] = 'add';
arr[11] = '11'; // as posicoes 6-10 estarao vazias
console.log(arr);
