let qtdPista = 100;
let qtdSuperior = 200;
let qtdInferior = 400;
document.getElementById('qtd-pista').innerHTML = qtdPista
document.getElementById('qtd-superior').innerHTML = qtdSuperior
document.getElementById('qtd-inferior').innerHTML = qtdInferior

//comprar ticket*
function comprar() {
    //comprar o tipo de ingresso escolhido*
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    //comprar a quantidade de ingresso informada
    let quantidade = document.getElementById('qtd').value;

    reduzirEstoque(tipoIngresso, quantidade);
}

//deduzir ticket da quantidade disponível
function reduzirEstoque(tipo, qtd) {
    if (tipo == 'pista') {
        qtdPista -= qtd;
        document.getElementById('qtd-pista').innerHTML = qtdPista
    } else if (tipo == 'superior') {
        qtdSuperior -= qtd;
        document.getElementById('qtd-superior').innerHTML = qtdSuperior
    } else {
        qtdInferior -= qtd;
        document.getElementById('qtd-inferior').innerHTML = qtdInferior
    }
}