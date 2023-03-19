// selecione os elementos do formulário que serão preenchidos automaticamente
const cepInput = document.querySelector("input[name=cep]");
const logradouroInput = document.querySelector("input[name=endereco]");
const bairroInput = document.querySelector("input[name=bairro]");
const cidadeInput = document.querySelector("input[name=cidade]");
const estadoInput = document.querySelector("input[name=estado]");

// adicione um listener para quando o campo de CEP perder o foco
cepInput.addEventListener("blur", () => {
    // faça uma requisição para a API do ViaCEP
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://viacep.com.br/ws/${cepInput.value}/json/`);
    xhr.onload = () => {
        if (xhr.status === 200) {
            // se a requisição for bem-sucedida, preencha os campos do formulário com os dados retornados
            const data = JSON.parse(xhr.responseText);
            logradouroInput.value = data.logradouro;
            bairroInput.value = data.bairro;
            cidadeInput.value = data.localidade;
            estadoInput.value = data.uf;
        } else {
            // se a requisição falhar, exiba uma mensagem de erro
            console.log(`Erro ${xhr.status}: ${xhr.statusText}`);
        }
    };
    xhr.send();
});
