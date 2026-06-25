// --- LÓGICA DO JOGO DA FORCA CORRIGIDA ---

// Banco de palavras sobre Cidadania Digital e IA
const bancoPalavras = [
    { palavra: "DEEPFAKE", dica: "Vídeo ou áudio gerado por IA que altera rostos e vozes." },
    { palavra: "ALGORITMO", dica: "Conjunto de regras robóticas que controlam o que você vê nas redes." },
    { palavra: "PRIVACIDADE", dica: "Direito de proteger seus dados pessoais na internet." },
    { palavra: "VERIFICAR", dica: "Ação necessária antes de compartilhar uma notícia suspeita." },
    { palavra: "PHISHING", dica: "Golpe digital para roubar senhas e dados fingindo ser uma empresa." }
];

let palavraEscolhida = "";
let dicaEscolhida = "";
let letrasAdivinhadas = [];
let errosRestantes = 6;

// Função principal que roda o jogo
function iniciarJogo() {
    errosRestantes = 6;
    letrasAdivinhadas = [];
    
    // Seleciona uma palavra aleatória do banco
    const itemAleatorio = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)];
    palavraEscolhida = itemAleatorio.palavra;
    dicaEscolhida = itemAleatorio.dica;

    // Atualiza os textos na tela
    document.getElementById("texto-dica").textContent = dicaEscolhida;
    document.getElementById("erros-contagem").textContent = errosRestantes;
    
    const statusRobo = document.getElementById("status-robo");
    statusRobo.textContent = "Aguardando comando... (0% de upload do vírus)";
    statusRobo.style.color = "inherit";

    desenharPalavra();
    gerarTeclado();
}

function desenharPalavra() {
    const palavraContainer = document.getElementById("palavra-container");
    palavraContainer.innerHTML = "";
    
    // Monta os traços ou letras descobertas
    for (let letra of palavraEscolhida) {
        if (letrasAdivinhadas.includes(letra)) {
            palavraContainer.innerHTML += `<span>${letra}</span>`;
        } else {
            palavraContainer.innerHTML += `<span>_</span>`;
        }
    }

    // Verifica se o jogador acertou todas as letras
    const ganhou = !palavraContainer.textContent.includes("_");
    if (ganhou) {
        const statusRobo = document.getElementById("status-robo");
        statusRobo.textContent = "🎉 FAKE NEWS BLOQUEADA! Você salvou a rede!";
        statusRobo.style.color = "#28a745";
        bloquearTeclado();
    }
}

function gerarTeclado() {
    const tecladoContainer = document.getElementById("teclado-container");
    tecladoContainer.innerHTML = "";
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let letra of alfabeto) {
        const botao = document.createElement("button");
        botao.textContent = letra;
        botao.classList.add("letra-btn"); // Nome da classe corrigido para bater com o CSS
        
        botao.addEventListener("click", () => verificarLetra(letra, botao));
        tecladoContainer.appendChild(botao);
    }
}

function verificarLetra(letra, botao) {
    botao.disabled = true; 

    if (palavraEscolhida.includes(letra)) {
        letrasAdivinhadas.push(letra);
        botao.classList.add("correta");
        desenharPalavra();
    } else {
        errosRestantes--;
        botao.classList.add("errada");
        document.getElementById("erros-contagem").textContent = errosRestantes;
        atualizarStatusRobo();
    }
}

function atualizarStatusRobo() {
    const statusRobo = document.getElementById("status-robo");
    
    // Dicionário de mensagens corrigido (Corrigido de percentages para porcentagens)
    const porcentagens = {
        5: "⚠️ Robô Iniciando... (15% de upload)",
        4: "⚠️ Robô Processando dados falsos... (35% de upload)",
        3: "⚠️ Robô Espalhando bots... (55% de upload)",
        2: "🔥 PERIGO! Servidores sendo atacados... (75% de upload)",
        1: "🔥 CRÍTICO! IA prestes a disparar em massa... (90% de upload)",
        0: "💀 GAME OVER! O Robô completou o upload da Fake News."
    };

    statusRobo.textContent = porcentagens[errosRestantes] || "";

    if (errosRestantes === 0) {
        statusRobo.style.color = "#dc3545";
        // Revela a palavra correta para o usuário ao perder
        document.getElementById("palavra-container").innerHTML = `<span>${palavraEscolhida}</span>`;
        bloquearTeclado();
    }
}

function bloquearTeclado() {
    const botoes = document.querySelectorAll(".letra-btn");
    botoes.forEach(b => b.disabled = true);
}

// Garante que o código só vai rodar DEPOIS que o HTML carregar por completo
window.onload = function() {
    iniciarJogo();
    
    // Configura o botão de próxima palavra
    document.getElementById("btn-proxima-palavra").addEventListener("click", iniciarJogo);
};
