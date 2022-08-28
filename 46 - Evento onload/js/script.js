/**
 *  O onload é activado ao carregar a paginaç
 *  Podemo depois desse evento realizar alguma acao no nosso projecto
 */

// é executado imediatamente apos o carregamente de toda pagina
window.onload = function () {
    
    setTimeout(function() {
        document.body.style.cssText = 'background-color: black; color: white';
    }, 2000);
    console.log('Carregou o DOM');
}

console.log('Forra do onload');