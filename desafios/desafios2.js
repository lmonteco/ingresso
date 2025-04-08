function somar(x, y) {
    return x + y;
}

function subtrair(x, y) {
    return x - y;
}

function multiplicar(x, y) {
    return x * y;
}

function dividir(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Erro: divisão por zero.";
    }
}

function calculadora(operacao, a, b) {
    switch (operacao) {
        case 'somar':
            return somar(a, b);
        case 'subtrair':
            return subtrair(a, b);
        case 'multiplicar':
            return multiplicar(a, b);
        case 'dividir':
            return dividir(a, b);
        default:
            return "Operação inválida.";
    }
}

// Exemplo de uso
let resultado = calculadora('dividir', 5, 0);
console.log(resultado);  // Saída esperada: 8