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

    if (!cepValido(cep)){
        alert("CEP inválido. Deve conter exatamente 8 dígitos numéricos.");
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json;

        if(data.erro) {
            alert("CEP não encontrado");
            return;
        }

        document.getElementById("rua").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;
    }
    catch(error){
        console.error("Erro ao buscar o CEP:", error);
        alert("Erro ao buscar o CEP.");
    }
}

// Cadastra uma nova necessidade, valida os campos e salva no localStorage
function cadastrar(){
    const nome = document.getElementById("nome").value;
    const tipo = document.getElementById("tipo").value;
    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    const contato = document.getElementById("contato").value;
    const cep = document.getElementById("cep").value;
    const rua = document.getElementById("rua").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!nome || !tipo || !titulo || !descricao || !contato || !cep || !rua || !bairro || !cidade || !estado) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Valida se o contato é um e-mail ou telefone válido
    function validarContato(contato) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexTelefone = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
        return regexEmail.test(contato) || regexTelefone.test(contato);
    }
    if (!validarContato(contato)) {
        alert("Por favor, insira um contato válido. Pode ser um e-mail ou um número de telefone.");
        return;
    }

    // Cria o objeto da necessidade
    const ajuda = {
        nome,
        tipo,
        titulo,
        descricao,
        contato,
        cep,
        rua,
        bairro,
        cidade,
        estado
    };
}