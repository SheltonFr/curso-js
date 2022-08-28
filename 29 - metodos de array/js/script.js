var arr = [1,2,3,4,5];
// length
console.log(arr.length);

// push(element) - adiciona elemento ao fim do array
arr.push(6);
console.log(arr);

//pop() - remove elemento no fim do array
arr.pop();
console.log(arr);

//unshift(element) - adiciona no comecao
arr.unshift('unshift');
console.log(arr);

// shift() - remove no comeco
arr.shift();
console.log(arr);

// isArray(param)  - boolean. verifica se param é ou nao array
console.log(Array.isArray(arr)); //true
console.log(Array.isArray(5)); // false