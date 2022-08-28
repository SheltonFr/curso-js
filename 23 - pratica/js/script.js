var lista = ['Laranja', 'Maca', 'Pera', 'Uva'];

// criando lista para html

var listaUl = document.createElement('ul'); 

// retorna um HTMLColection com todos os elementos com a tag especificada
var body = document.getElementsByTagName('body');
//console.log(body[0]) // usamos os inndices para especificar qual dos elementos queremos manipular


// metodo appendChild(...) adiciona um elemento filho
body[0].appendChild(listaUl);


for(var i = 0; i < lista.length; i++){
    
    var listItem = document.createElement('li'); // cria um elemento para lista

    var textItem = document.createTextNode(lista[i]); // cria um elemento de texto, com o texto passado como parametro

    listItem.appendChild(textItem); // adiciona o textItem como elemento de listItem

    listaUl.appendChild(listItem); // adiciona o item À lista
}