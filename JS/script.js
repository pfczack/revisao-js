// Função para exibir um alerta ao clicar no botão "Entrar"
document.getElementById('entrarBtn').onclick = function() {
    alert('Você clicou em Entrar!');
};

// Função para exibir saudação ao enviar nome
document.getElementById('enviarBtn').onclick = function() {
    const nome = document.getElementById('nome').value;
    const saudacao = document.getElementById('saudacao');
    saudacao.innerText = `Olá, ${nome}!`;
};

// Exibir data atual
document.getElementById('dataAtual').innerText = new Date().toLocaleDateString('pt-BR');

// Função para calcular a média
function calcularMedia() {
    const notasInput = document.getElementById('notas').value;
    const notas = notasInput.split(',').map(Number);
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    const resultadoMedia = document.getElementById('resultadoMedia');
    
    resultadoMedia.innerText = `A média é ${media.toFixed(2)} e é ${media % 2 === 0 ? 'par' : 'ímpar'}.`;
    
    // Atualiza a tabela com as notas
    atualizarTabela(notas);
}

// Função para atualizar a tabela de notas
function atualizarTabela(notas) {
    const tbody = document.getElementById('tbodyNotas');
    tbody.innerHTML = ''; // Limpa a tabela existente
    notas.forEach(nota => {
        const row = tbody.insertRow();
        const cell = row.insertCell(0);
        cell.innerText = nota;
    });
}

// Função para operações matemáticas
document.getElementById('calcularBtn').onclick = function() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    const resultadoCalculo = document.getElementById('resultadoCalculo');

    const calculadora = {
        adicao: () => num1 + num2,
        subtracao: () => num1 - num2,
        porcentagem: () => (num1 * num2) / 100,
        multiplicacao: () => (num1 * num2)
    };

    resultadoCalculo.innerText = `Resultado: ${calculadora[operacao]()}`;
};

// Limpar todo o conteúdo do body
document.getElementById('limparBtn').onclick = function() {
    document.body.innerHTML = `
        <h1>Bem-vindo!</h1>
        <button id="entrarBtn">Entrar</button>
        <div id="saudacao"></div>
        <div>
            <label for="nome">Digite seu nome: </label>
            <input type="text" id="nome" />
            <button id="enviarBtn">Enviar</button>
        </div>
        <div>
            <h2>Data Atual:</h2>
            <p id="dataAtual"></p>
        </div>
        <div>
            <label for="notas">Digite suas notas (separadas por vírgula): </label>
            <input type="text" id="notas" />
            <button id="calcularMediaBtn" ondblclick="calcularMedia()">Duplo Clique para Calcular</button>
            <div id="resultadoMedia"></div>
        </div>
        <div>
            <h2>Operações Matemáticas</h2>
            <input type="number" id="num1" placeholder="Número 1" />
            <input type="number" id="num2" placeholder="Número 2" />
            <select id="operacao">
                <option value="adicao">Adição</option>
                <option value="subtracao">Subtração</option>
                <option value="porcentagem">Porcentagem</option>
                <option
                value="multiplicacao">Multiplicacao</option>
            </select>
            <button id="calcularBtn">Calcular</button>
            <div id="resultadoCalculo"></div>
        </div>
        <h2>Tabela de Notas</h2>
        <table id="tabelaNotas">
            <thead>
                <tr>
                    <th>Notas</th>
                </tr>
            </thead>
            <tbody id="tbodyNotas"></tbody>
        </table>
        <button id="limparBtn">Limpar Tudo</button>
    `;
    // Recria os elementos para adicionar novamente os eventos
    adicionarEventos();
};

// Função para adicionar eventos após limpar o body
function adicionarEventos() {
    document.getElementById('entrarBtn').onclick = function() {
        alert('Você clicou em Entrar!');
    };

    document.getElementById('enviarBtn').onclick = function() {
        const nome = document.getElementById('nome').value;
        const saudacao = document.getElementById('saudacao');
        saudacao.innerText = `Olá, ${nome}!`;
    };

    document.getElementById('dataAtual').innerText = new Date().toLocaleDateString('pt-BR');

    document.getElementById('calcularMediaBtn').ondblclick = calcularMedia;

    document.getElementById('calcularBtn').onclick = function() {
        const num1 = Number(document.getElementById('num1').value);
        const num2 = Number(document.getElementById('num2').value);
        const operacao = document.getElementById('operacao').value;
        const resultadoCalculo = document.getElementById('resultadoCalculo');

        const calculadora = {
            adicao: () => num1 + num2,
            subtracao: () => num1 - num2,
            porcentagem: () => (num1 * num2) / 100,
            multiplicacao: () => (num1 * num2)
        };

        resultadoCalculo.innerText = `Resultado: ${calculadora[operacao]()}`;
    };
}

// Adicionar eventos inicialmente
adicionarEventos();