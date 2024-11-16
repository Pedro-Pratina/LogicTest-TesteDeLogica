const input = require("prompt-sync")();

const senha = 2002
let senhaInserida = 0

while(senhaInserida !== senha){
    senhaInserida = Number(input("Insira a senha: "))

    if(senha !== senhaInserida){
        console.log("Senha Invalida")
    }
}

console.log("Acesso Permitido")