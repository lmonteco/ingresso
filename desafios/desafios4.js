const prompt = require('prompt-sync')();

let escala = '';
let escala1 = 'Fahrenheit';
let escala2 = 'Celcius';

if (escala === escala1) {
    let tempCelcius = Number(prompt(`Insira a temperatura atual (°C):`));
    converterFahrenheit(tempCelcius);
} else if (escala === escala2) {
    let tempFahrenheit = Number(prompt(`Insira a temperatura atual (°F):`));
    converterCelcius(tempFahrenheit);
}

function converterFahrenheit(c) {
    return (c * 1.8) + 32;
}

function converterCelcius(f) {
    return (f - 32) / 1.8;
} 