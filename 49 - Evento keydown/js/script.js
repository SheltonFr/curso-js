/**
 *  E actiado quando uma tecla e presionado;
 *  Podemos tambem atrelar o evento keyup para quando a tecla volta a posicao normal
 */

// keydown

document.addEventListener('keydown', function(event) {
    // o parametro da funcao, contem todas as informacoes do evento ocorrido(no caso, da tecla pressionada)
    console.log(event.key); // retorna a chava da tecla 'identifcador'

    if(event.key == 'Enter'){
        console.log('Clicou enter');
    }
});

// keyup

document.addEventListener('keyup', function(e){
    if(e.key == 'Enter'){
        console.log('Soltou o Enter');
    }
});