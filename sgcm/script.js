function carregarProfissionais() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://my-json-server.typicode.com/juniorlimeiras/json/profissionais');
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let dados = JSON.parse(xhr.responseText);
            let tabela = document.querySelector('table');
            for (let item of dados) {
                let linha = document.createElement('tr');
                let id = document.createElement('td');
                let nome = document.createElement('td');
                let registro = document.createElement('td');
                let telefone = document.createElement('td');
                let email = document.createElement('td');
                let unidade = document.createElement('td');
                let especialidade = document.createElement('td');

                id.textContent = item.id;
                nome.textContent = item.nome;
                registro.textContent = item.registro;
                telefone.textContent = item.telefone;
                email.textContent = item.email;
                unidade.textContent = item.unidade;
                especialidade.textContent = item.especialidade;

                linha.appendChild(id);
                linha.appendChild(nome);
                linha.appendChild(registro);
                linha.appendChild(telefone);
                linha.appendChild(email);
                linha.appendChild(unidade);
                linha.appendChild(especialidade);
                tabela.appendChild(linha);
            }
        }
    });//Fecha o escutador de evento
    xhr.send();
}
carregarProfissionais();