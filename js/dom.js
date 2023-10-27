// Função de somar:

// function teste(arg1, arg2) {
//     console.log(arg1 + arg2);
// }
// teste(7, 1);

// Função de impressão:

// function imprimenome(name) {
//     console.log(`Meu nome é ${name}`);
// }
// imprimenome("Beatriz");
// imprimenome("Taiki");
// imprimenome("Dantas");

// Função de botão com clique:

// function cliqueAqui() {
//     alert("Olá");
// }

// Criando Variavel:

const tirarDiv = document.querySelector(".tirarDiv");   // DOM
const voltarDiv = document.querySelector(".voltarDiv");
const card = document.querySelector(".card");

tirarDiv.addEventListener("click", function(){
    card.style.display = "none";
})

voltarDiv.addEventListener("click", function(){
    card.style.display = "block";
})