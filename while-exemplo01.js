// No while, a variável fica fora do let
// e o incremento fica depois de fechar os ().
// se não houver um incremento, vira um loop infinito.

let i = 0;
while (i <= 5){
    console.log("Passagem: " + i);
    i++;
}