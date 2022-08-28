// escopo global - as variaveis (var) sao acessiveis em qualquer lugar
var x = 1;
var y = 3;

console.log(x,y);

function teste() {
    //escopo loval - as variaveis so sao assessiveis neste escopo
    var z = 0;
    console.log(z);
}

teste()