// Limpa todos os campos do formulário de cadastro
const limpar = () => {
    document.getElementById("nome").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("contato").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
}

// Valida se o CEP possui exatamente 8 dígitos numéricos
function cepValido(cep) {
    const cepStr = String(cep);
    return cepStr.length === 8 && /^[0-9]{8}$/.test(cepStr);
}

// Busca o endereço pelo CEP informado e preenche os campos de endereço
async function pesquisarCep() {
    const cepInput = document.getElementById("cep");
    const cep = cepInput.value.replace(/\D/g, '');
}