let n1 = Number(prompt('Digite um valor:'));
let operacao = prompt('Digite o sinal de operação:');
let n2 = Number(prompt('Digite um outro valor'));

if (operacao === '+') {
    console.log(adicionar(n1, n2));
} else if (operacao === '-') {
    console.log(subtrair(n1, n2));
} else if (operacao === '*' || operacao === 'x') {
    console.log(multiplicar(n1, n2));
} else if (operacao === '/') {
    console.log(dividir(n1, n2));
}

function adicionar(x, y) {
    return x + y;
}

function subtrair(x, y) {
    return x - y;
}

function multiplicar(x, y) {
    return x * y;
}

function dividir(x, y) {
    return x / y;
}