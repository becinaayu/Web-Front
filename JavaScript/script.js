// Para id: usar # 
const buttonMedicamentos = document.querySelector("#medicamentos");
// Para classe: usar .
const remedios = document.querySelector(".remedios");

// Variavel validação
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");
const buttonEnviar = document.querySelector("button");

// Criando um elemento p
const pMensagem = document.createElement("p");


function clearForm() {
    campoNome.value = '';
    campoCidade.value = '';
}

// Função da validação
buttonEnviar.addEventListener("click", function(event){
    event.preventDefault();
    if (campoNome.value === ''){
        // alert("Preencha o campo nome!");
        pMensagem.textContent = "Preencha o campo nome!";
        campoNome.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "erro");
        return false;
    }

    if (campoCidade.value === ''){
        // alert("Preencha o campo cidade!");
        pMensagem.textContent = "Preencha o campo cidade!";
        campoCidade.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "erro");   
        return false;
    }
    pMensagem.classList.add('d-none');
    clearForm();    
});

// Chamando medicamentos 
buttonMedicamentos.addEventListener("click", function(){
    // adicionar classes 
    remedios.classList.add("d-block");
});