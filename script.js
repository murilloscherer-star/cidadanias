// Banco de dados temático das palavras do Jogo da Forca
const bancoPalavras = [
    { palavra: "DEEPFAKE", dica: "Vídeo ou áudio modificado realisticamente com uso de Inteligência Artificial." },
    { palavra: "ALGORITMO", dica: "Instruções automatizadas que decidem quais mentiras se espalham mais rápido nas redes." },
    { palavra: "CHECAGEM", dica: "Ação necessária de cruzar dados antes de compartilhar qualquer conteúdo suspeito." },
    { palavra: "ROBO", dica: "Conta automatizada usada para simular engajamento humano e inflar fake news." },
    { palavra: "FONTE", dica: "A primeira coisa que devemos verificar em um portal para saber se a notícia é real." },
    { palavra: "DESINFORMACAO", dica: "Conteúdo intencionalmente falso criado para enganar ou prejudicar a sociedade." }
];

// Estado global das variáveis do jogo
let palavraEscolhida = "";
let dicaEscolhida = "";
let letrasAdivinhadas = [];
let errosCometidos = 0;
const limiteErros = 6;

// Seletores do DOM - Jogo da Forca
const elWordDisplay = document.getElementById("word-display");
const elWordTip = document.getElementById("word-tip");
const elRobotStatus = document.getElementById("robot-status");
const elLivesLeft = document.getElementById("lives-left");
const elKeyboard = document.getElementById("keyboard");
const elGameMessage = document.getElementById("game-message");
const elMessageText = document.getElementById("message-text");
const elBtnRestart = document.getElementById("btn-restart");

// Seletores do DOM - Recursos Adicionais e Formulários
const btnDarkMode = document.getElementById("toggle-dark-mode");
const communityForm = document.getElementById("community-form");
const formFeedback = document.getElementById("form-feedback");

// --- FUNÇÕES DE INICIALIZAÇÃO DO JOGO ---

function iniciarJogo() {
    // Escolhe um item aleatório do banco de dados
    const itemAleatorio = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)];
    palavraEscolhida = itemAleatorio.palavra;
    dicaEscolhida = itemAleatorio.dica;
    
    // Reseta o estado das variáveis
    letrasAdivinhadas = [];
    errosCometidos = 0;
    
    // Limpa e atualiza a interface visual
    elWordTip.innerText = dicaEscolhida;
    elLivesLeft.innerText = limiteErros - errosCometidos;
    elRobotStatus.innerHTML = `Progresso do Robô: <span style="color: var(--success-color);">Seguro</span>`;
    
    elGameMessage.classList.add("hidden");
    elGameMessage.className = "game-message-box hidden";
    
    renderizarPalavra();
    criarTeclado();
}

// Renderiza os tracinhos na tela baseados nas letras adivinhadas
function renderizarPalavra() {
    elWordDisplay.innerHTML = "";
    
    for (let letra of palavraEscolhida) {
        const span = document.createElement("span");
        if (letrasAdivinhadas.includes(letra)) {
            span.innerText = letra;
        } else {
            span.innerText = "_";
        }
        elWordDisplay.appendChild(span);
    }
}

// Cria dinamicamente os botões do teclado virtual de A a Z
function criarTeclado() {
    elKeyboard.innerHTML = "";
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (let letra of alfabeto) {
        const botao = document.createElement("button");
        botao.innerText = letra;
        botao.classList.add("btn-letter");
        
        // Evento de clique para processar a tentativa da letra
        botao.addEventListener("click", () => verificarTentativa(letra, botao));
        elKeyboard.appendChild(botao);
    }
}

// --- LOGICA PRINCIPAL DO JOGO DA FORCA ---

function verificarTentativa(letra, botao) {
    botao.disabled = true; // Desativa o botão após o clique para evitar cliques repetidos
    
    if (palavraEscolhida.includes(letra)) {
        letrasAdivinhadas.push(letra);
        renderizarPalavra();
        verificarVitoria();
    } else {
        errosCometidos++;
        elLivesLeft.innerText = limiteErros - errosCometidos;
        atualizarStatusRobo();
        verificarDerrota();
    }
}

function atualizarStatusRobo() {
    if (errosCometidos === 2) {
        elRobotStatus.innerHTML = `Progresso do Robô: <span style="color: orange;">IA gerando scripts falsos...</span>`;
    } else if (errosCometidos === 4) {
        elRobotStatus.innerHTML = `Progresso do Robô: <span style="color: var(--danger-color);">Deepfake enviada para renderização!</span>`;
    }
}

function verificarVitoria() {
    // Se não houver mais nenhum traço (_) visível, o jogador venceu
    const palavraAtual = elWordDisplay.innerText.replace(/\s/g, "");
    if (palavraAtual === palavraEscolhida) {
        desativarTeclado();
        elMessageText.innerText = "🎉 Excelente! Você descobriu a palavra e impediu o Robô de espalhar a Fake News!";
        elGameMessage.classList.remove("hidden");
        elGameMessage.classList.add("win");
    }
}

function verificarDerrota() {
    if (errosCometidos >= limiteErros) {
        desativarTeclado();
        elRobotStatus.innerHTML = `Progresso do Robô: 💥 <span style="color: var(--danger-color);">Ataque Concluído! A desinformação infectou a rede.</span>`;
        elMessageText.innerText = `❌ Fim de jogo! A IA maliciosa venceu. A palavra era: ${palavraEscolhida}`;
        elGameMessage.classList.remove("hidden");
        elGameMessage.classList.add("lose");
    }
}

function desativarTeclado() {
    const botoes = elKeyboard.querySelectorAll("button");
    botoes.forEach(b => b.disabled = true);
}

// --- REQUISITOS ADICIONAIS DA RUBRICA (ACESSIBILIDADE E FORMULÁRIO) ---

// Botão de Alternar Modo Escuro (Acessibilidade)
btnDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        btnDarkMode.innerText = "Alternar Tema ☀️";
    } else {
        btnDarkMode.innerText = "Alternar Tema 🌙";
    }
});

// Interceptação do Formulário com Validação de Variáveis e Manipulação do DOM
communityForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o recarregamento padrão da página
    
    // Captura e processamento das variáveis antes de exibir na tela
    const nomeUsuario = document.getElementById("user-name").value;
    const experienciaUsuario = document.getElementById("user-experience").value;
    
    let mensagemResposta = `Obrigado pelo envio, ${nomeUsuario}! `;
    
    if (experienciaUsuario === "sim" || experienciaUsuario === "frequente") {
        mensagemResposta += "Seus dados confirmam o alto índice de exposição comunitária a conteúdos sintéticos de IA.";
    } else {
        mensagemResposta += "Seus dados ajudam a mapear o nível de detecção precoce de fraudes virtuais.";
    }
    
    // Exibe o retorno do banco de dados fictício na tela alterando classes dinamicamente
    formFeedback.innerText = mensagemResposta;
    formFeedback.classList.remove("hidden");
    
    // Reseta os campos do formulário de forma limpa
    communityForm.reset();
});

// Vincula o botão de reiniciar à função inicializadora
elBtnRestart.addEventListener("click", iniciarJogo);

// Executa a carga inicial do jogo assim que o script finaliza a leitura
iniciarJogo();
