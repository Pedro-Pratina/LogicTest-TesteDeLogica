const input = require("prompt-sync")();

const raio = Number(input("Digite o Raio: "))
const pi = 3.14159

let conta = (pi * (raio ** 2)).toFixed(4)
console.log(conta)