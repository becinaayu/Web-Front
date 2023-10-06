// let frutas = ["morango", "banana", "mamão", "pera"];
// console.log(frutas.includes("morango")); // verifica se existe um item específico dentro da array

let frutas = ["morango", "banana", "mamão", "pera"];
if (frutas.includes("abacaxi")) {
    console.log(`A string "abacaxi" existe no array frutas.`);
} else if (frutas.includes("pera")) {
    console.log('A string "pera" existe no array frutas.');
} else {
    console.log('As strings "abacaxi" e "pera" não existem no array frutas');
}