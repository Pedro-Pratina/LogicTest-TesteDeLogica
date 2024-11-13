const input = require("prompt-sync")();

const pedido1 = (input("Digite o código, quantidade e valor da peça: ")).split(' ')
const pedido2 = (input("Digite o código, quantidade e valor da peça: ")).split(' ')

let totalDaSoma = 0

calcular()
function calcular() {
    const resultadoPedido1 = Number(pedido1[1]) * Number(pedido1[2])
    const resultadoPedido2 = Number(pedido2[1]) * Number(pedido2[2])
    
    totalDaSoma = resultadoPedido1 + resultadoPedido2
}

console.log(`VALOR A PAGAR: R$ ${totalDaSoma.toFixed(2)}`)