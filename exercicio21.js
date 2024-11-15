const input = require("prompt-sync")();

const pedido = (input("Digite o numero e a quantidade do seu pedido: ")).split(' ')
const codigo = Number(pedido[0])
const quant = Number(pedido[1])
let preco = 0

if (codigo === 1){
    preco = 4.00
} else if (codigo === 2){
    preco = 4.50
} else if (codigo === 3){
    preco = 5.00
} else if (codigo === 4){
    preco = 2.00
} else if (codigo === 5){
    preco = 1.50
} else {
    return console.log('Código invalido!')
}

const total = (preco * quant).toFixed(2)

console.log(`Total: ${total}`)