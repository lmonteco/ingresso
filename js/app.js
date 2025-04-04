let qtdPista = 100;
let qtdSuperior = 200;
let qtdInferior = 400;
document.getElementById('qtd-pista').innerHTML = qtdPista;
document.getElementById('qtd-superior').innerHTML = qtdSuperior;
document.getElementById('qtd-inferior').innerHTML = qtdInferior;

//comprar ticket*
function comprar() {
    //comprar o tipo de ingresso escolhido*
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    //comprar a quantidade de ingresso informada
    let quantidade = document.getElementById('qtd').value;

    if (isNaN(quantidade) || quantidade <= 0) {
        alert(`Insira uma quantidade válida`);
        return;
    }

    reduzirEstoque(tipoIngresso, quantidade);
    limparFormulario();
}

//deduzir ticket da quantidade disponível
function reduzirEstoque(tipo, qtd) {
    if (tipo == 'pista' && qtd <= qtdPista) {
        qtdPista -= qtd;
        document.getElementById('qtd-pista').innerHTML = qtdPista;
    } else if (tipo == 'superior' && qtd <= qtdSuperior) {
        qtdSuperior -= qtd;
        document.getElementById('qtd-superior').innerHTML = qtdSuperior;
    } else if (tipo == 'inferior' && qtd <= qtdInferior) {
        qtdInferior -= qtd;
        document.getElementById('qtd-inferior').innerHTML = qtdInferior;
    } else {
        alert(`Esse ingresso não está disponível no momento. Tente mais tarde`);
        return;
    }
}

function limparFormulario() {
    document.getElementById('qtd').value = ''
}