# fundamentos-front-end-turma7
Repositório da disciplina Fundamentos de Programação Front-end Turma 7

## Atualizando seu repositório local

O código produzido em sala de aula, e compartilhado neste repositório, pode ser atualizado em seu repositório local com o comando:

```console
git pull
```

No entando, se você fez alterações no seu repositório local, o comando acima pode gerar conflitos. Para evitar lidar com isso, você pode forçar uma atualização com o repositório remoto por meio dos comandos:

```console
git fetch origin
git reset --hard origin/main
```

O primeiro comando recebe as atualizações mais recentes do repositório remoto, e o segundo descarta todas as alterações locais e atualiza com o histórico mais recente do repositório remoto (branch main).

## Sites de referência

- MDN Web Docs - Aprendendo desenvolvimento web: <https://developer.mozilla.org/pt-BR/docs/Learn>
- W3Schools Online Web Tutorials: <https://www.w3schools.com/>
- W3C Standards: <https://www.w3.org/standards/>

## Ferramentas

- **Visual Studio Code**
  - <https://code.visualstudio.com/Download>
- **Live Server (Extensão do VS Code)**
  - <https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer>
- **Git**
  - <https://git-scm.com/downloads>
- **Chrome Developer Tools (F12)**

## SGCM - Sistema de Gerenciamento de Clínica Médica

A demonstração de uso das ferramentas e tecnologias abordadas na capacitação é baseada em um projeto de exemplo, o SGCM. A documentação básica deste projeto está disponível [em outro repositório](https://github.com/webacademyufac/sgcmdocs) e aborda os seguintes tópicos:

- [Principais funcionalidades](https://github.com/webacademyufac/sgcmdocs#principais-funcionalides)
- [Histórias de usuário](https://github.com/webacademyufac/sgcmdocs#histórias-de-usuário)
- [Diagrama de Classes](https://github.com/webacademyufac/sgcmdocs#diagrama-de-classes)
- [Diagrama Entidade Relacionamento](https://github.com/webacademyufac/sgcmdocs#diagrama-entidade-relacionamento)


1. [INDIVIDUAL] Página de currículo:
 
 Parte 1: criar uma página HTML para exibir informações sobre seu currículo pessoal, a página pode conter dados pessoais, acadêmicos e profissionais.
 - A página deve conter tags de títulos, parágrafos e listas
 - A página deve conter imagens
 - A pagina deve conter links para outras páginas
 - A página deve conter uma tabela com as informações do seu contato como telefone e e-mail
 - Adicione um formulário para simular que visitantes possam enviar uma mensagem, incluindo campos para nome, e-mail e o conteúdo da mensagem.

 Parte 2: criar um arquivo CSS externo chamado estilo.css. para estilizar a página HTML da atividade anterior.
 - Defina uma fonte padrão para a página usando a propriedade font-family.
 - Defina estilos diferentes para os títulos &lt;h1&gt; e &lt;h2&gt;, como cor, tamanho da fonte e alinhamento.
 - Estilize os parágrafos (&lt;p&gt;) definindo margens, tamanho da fonte e cor do texto.
 - Adicione espaçamento e um tipo de marcador personalizado às listas não ordenadas (&lt;ul&gt;) e ordenadas (&lt;ol&gt;).
 - Adicione uma cor diferente para links (&lt;a&gt;) e defina um efeito de "hover" (quando o mouse passar por cima).
 - Estilize a tabela de contato com bordas, espaçamento interno e cores de fundo alternadas para as linhas.
 - Estilize o formulário para melhorar a apresentação dos campos e do botão de envio.

Link no github classroom: 
https://classroom.github.com/a/dNYSTfeS

Entrega: 07/07/2025 até 18h

2. [DUPLA] Funcionalidades JavaScript:
 a) Adicionar um botão acima da tabela de profissionais com o texto Adicionar que deve apresentar o form de cadastro do profisional. Quando o formulário ativo o botão deve ficar oculto. Quando os dados forem enviados para a tabela, apresente uma mensagem de confirmação, atualize a tabela e oculte o formulário. Adicione um botão Cancelar no formulário que deve ocultar o formulário e reapresentar a opção de Adicionar.
 b) Alterar o rodapé da tabela que mostra o total de profissionais para que seja atualizado conforme a quantidade de profissionais. A atualização deve considerar todos os registros.
 c) Implementar a funcionalidade do botão editar para a página de profissionais. Quando o botão for acionado o formulário deve ser apresentado permitindo a edição do profissional que foi escolhido na tabela.
 d) Melhorar a responsividade da tabela na página de profissionais, mostrando apenas as colunas id, nome, especialidade e opções em dispositivos menores.


Link no github classroom: https://classroom.github.com/a/TzNbcQ3x
Entrega: 12/07/2025 até 23:59


3. [GRUPO] Páginas de cadastro do SGCM:
 Construir páginas para cadastro de usuários, convênios, unidades, especialidades, pacientes e atendimento de forma semelhante à página de cadastro de profissionais, e baseado na [documentação do SGCM](https://github.com/webacademyufac/sgcmdocs).
    - Time 1 (Khalil, Pedro, Artur, Mauricio, Andrey)
    - Time 2 (Caio, Carlos, Felipe, Tiago, Elyvan)
    - Time 3 (Andre, Julia, Ronauro, Jhonatas)
    - Time 4 (Ludimila, Maria Eduarda, Kauany, Ana Beatriz)
    - Time 5 (Giovanna, Vinicius, Jakeline)
    - Time 6 (Alonso, Bruno, Emanuel, Marcos Vinicius)
    
    - Página de Usuários (Time 5)
    - Página de Convênios (Time 4)
    - Página de Unidades (Time 3)
    - Página de Especialidades (Time 1)
    - Página de Pacientes (Time 2)
    - Página de Atendimentos (Time 6)

    - Dados no formato JSON para serem usados nas páginas:
        - Usuários: <https://my-json-server.typicode.com/juniorlimeiras/json2/usuarios>
        - Usuários: <https://my-json-server.typicode.com/juniorlimeiras/json2/atendimentos>
        - Convênios: <https://my-json-server.typicode.com/juniorlimeiras/json/convenios>
        - Unidades: <https://my-json-server.typicode.com/juniorlimeiras/json/unidades>
        - Especialidades: <https://my-json-server.typicode.com/juniorlimeiras/json/especialidades>
        - Pacientes: <https://my-json-server.typicode.com/juniorlimeiras/json/pacientes>

Link no github classroom: https://classroom.github.com/a/xzlTqkvp
Entrega: 14/07/2025 até 18h
