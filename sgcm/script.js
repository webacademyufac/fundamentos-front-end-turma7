function carregarProfissionais() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://my-json-server.typicode.com/juniorlimeiras/json/profissionais');
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let dados = JSON.parse(xhr.responseText);

            for (let item of dados) {
                inserirProfissional(item);
                // let linha = document.createElement('tr');
                // let id = document.createElement('td');
                // let nome = document.createElement('td');
                // let registro = document.createElement('td');
                // let telefone = document.createElement('td');
                // let email = document.createElement('td');
                // let unidade = document.createElement('td');
                // let especialidade = document.createElement('td');
                // let opcoes = document.createElement('td');

                // id.textContent = item.id;
                // nome.textContent = item.nome;
                // registro.textContent = item.registro;
                // telefone.textContent = item.telefone;
                // email.textContent = item.email;
                // unidade.textContent = item.unidade;
                // especialidade.textContent = item.especialidade;
                // opcoes.innerHTML = `<a class="botao_verde" href="">Editar</a>|<a class="botao_vermelho" href="javascript:void(0)">Excluir</a>`;

                // linha.appendChild(id);
                // linha.appendChild(nome);
                // linha.appendChild(registro);
                // linha.appendChild(telefone);
                // linha.appendChild(email);
                // linha.appendChild(unidade);
                // linha.appendChild(especialidade);
                // linha.appendChild(opcoes);
                // tabela.appendChild(linha);
            }
        }
        excluirLinha();
    });//Fecha o escutador de evento
    xhr.send();
}
carregarProfissionais();

let tabela = document.querySelector('table tbody');
let form = document.querySelector('form');
let btn_enviar = document.querySelector('input[type="submit"]');

btn_enviar.addEventListener('click', (event) => {
    event.preventDefault(); //Evita que a página seja recarregada
    //let objeto = new Object();
    let objeto = {
        id: tabela.rows.length,
        nome: form.nome.value,
        registro: form.registroConselho.value,
        telefone: form.telefone.value,
        email: form.email.value,
        unidade: form.unidade.options[form.unidade.selectedIndex].label,
        especialidade: form.especialidade.options[form.especialidade.selectedIndex].label
    }
    inserirProfissional(objeto);
});

const inserirProfissional = (item) => {
    let linha = document.createElement('tr');
    let id = document.createElement('td');
    let nome = document.createElement('td');
    let registro = document.createElement('td');
    let telefone = document.createElement('td');
    let email = document.createElement('td');
    let unidade = document.createElement('td');
    let especialidade = document.createElement('td');
    let opcoes = document.createElement('td');

    id.textContent = item.id;
    nome.textContent = item.nome;
    registro.textContent = item.registro;
    telefone.textContent = item.telefone;
    email.textContent = item.email;
    unidade.textContent = item.unidade;
    especialidade.textContent = item.especialidade;
    opcoes.innerHTML = `<a class="botao_verde" href="">Editar</a>|<a class="botao_vermelho" href="javascript:void(0)">Excluir</a>`;

    linha.appendChild(id);
    linha.appendChild(nome);
    linha.appendChild(registro);
    linha.appendChild(telefone);
    linha.appendChild(email);
    linha.appendChild(unidade);
    linha.appendChild(especialidade);
    linha.appendChild(opcoes);
    tabela.appendChild(linha);
}

function excluirLinha() {
    let botoes_excluir = document.querySelectorAll('a.botao_vermelho');
    for (let botao of botoes_excluir) {
        botao.addEventListener('click', () => {
            botao.parentElement.parentElement.remove();
        });
    }
}