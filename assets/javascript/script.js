//redirecionar para outra página após 5 segundos
function redirecionarParaOutraPagina(tempo, url) {
    setTimeout(function() {
        window.location.href = url;
    }, tempo);
}

redirecionarParaOutraPagina(5000, '/index.html');
