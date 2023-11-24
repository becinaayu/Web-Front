const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

// Criando um elemento
const pMensagem = document.createElement("p");
const pAvaliacao = document.createElement("pNota")

function clearForm() {
    inputNota.value = '';
}

button.addEventListener("click", (event) => {
    event.preventDefault();
    const inputNotaValue = inputNota.value;

    if (inputNotaValue.trim() === '') {
        pMensagem.textContent = "Campo Obrigatório";
        inputNota.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error");
        return false;
    }

    if (inputNotaValue >= 6) {
        pAvaliacao.textContent = "Aprovado";
        inputNota.insertAdjacentElement("afterend", pAvaliacao);
        pAvaliacao.setAttribute("class", "error");
        return false;
    } else {
        alert("Você está reprovado!");
    }

    pMensagem.classList.add("d-none");
    clearForm();

    pAvaliacao.classList.add("d-none");
    clearForm();
});