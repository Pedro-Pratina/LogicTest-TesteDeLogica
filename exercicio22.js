const input = require("prompt-sync")();

const array = (input('Digite os valores A, B e C: ')).split(' ')
const valorA = Number(array[0])
const valorB = Number(array[1])
const valorC = Number(array[2])

let delta = (valorB ** 2) - 4 * valorA * valorC

if(valorA <= 0){ 
    return console.log('Impossivel calcular: A negativo ou 0')
} else if (delta <= 0) {
    return console.log('Impossivel calcular: delta 0 ou negativo')
}

const primeiroX = ((-valorB + Math.sqrt(delta)) / (2 * valorA)).toFixed(5)
const segundoX = ((-valorB - Math.sqrt(delta)) / (2 * valorA)).toFixed(5)

console.log(`X1 = ${primeiroX}; X2 = ${segundoX}`)