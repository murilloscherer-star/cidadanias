// --- LOGICA DO JOGO DA FORCA ---

// Lista de palavras e dicas sobre Cidadania Digital
const bancoPalavras = [
    { palavra: "DEEPFAKE", dica: "Vídeo ou áudio gerado por IA que altera rostos e vozes." },
    { palavra: "ALGORITMO", dica: "Conjunto de regras robóticas que controlam o que você vê nas redes." },
    { palavra: "PRIVACIDADE", dica: "Direito de proteger seus dados pessoais na internet." },
    { palavra: "VERIFICAR", dica: "Ação necessária antes de compartilhar uma notícia suspeita." },
    { palavra: "PHISHING", dica: "Golpe digital para roubar senhas e dados fingindo ser uma empresa confiável." }
];

let palavraEscolhida = "";
let dicaEscolhida = "";
let letrasAdivinhadas = [];
let errosRestantes = 6;

// Elementos do DOM
const palavraContainer = document.getElementById("palavra-container");
const tecladoContainer = document.getElementById("teclado-container");
const textoDica = document.getElementById("texto-dica");
const errosContagem = document.getElementById("erros-contagem");
const statusRobo = document.getElementById("status-robo");
const btnProxima = document.getElementById("btn-proxima-palavra");

function iniciarJogo() {
    // Reset de variáveis
    errosRestantes = 6;
    letrasAdivinhadas = [];
    
    // Seleciona palavra aleatória
    const itemAleatorio = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)];
    palavraEscolhida = itemAleatorio.palavra;
    dicaEscolhida = itemAleatorio.dica;

    // Atualiza a tela
    textoDica.textContent = dicaEscolhida;
    errosContagem.textContent = errosRestantes;
    statusRobo.textContent = "Aguardando comando... (0% de upload do vírus)";
    statusRobo.style.color = "inherit";

    desenharPalavra();
    gerarTeclado();
}

function desenharPalavra() {
    palavraContainer.innerHTML = "";
    
    // Divide a palavra em letras e renderiza na tela
    for (let letra of palavraEscolhida) {
        if (letrasAdivinhadas.includes(letra)) {
            palavraContainer.innerHTML += `<span>${letra}</span>`;
        } else {
            palavraContainer.innerHTML += `<span>_</span>`;
        }
    }

    // Checa se o usuário ganhou
    const ganhou = !palavraContainer.textContent.includes("_");
    if (ganhou) {
        statusRobo.textContent = "🎉 FAKE NEWS BLOQUEADA! Você salvou a rede!";
        statusRobo.style.color = "#28a745";
        bloquearTeclado();
    }
}

function gerarTeclado() {
    tecladoContainer.innerHTML = "";
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let letra of alfabeto) {
        const botao = document.createElement("button");
        botao.textContent = letra;
        botao.classList.add("letca-btn");
        
        botao.addEventListener("click", () => verificarLetra(letra, botao));
        tecladoContainer.appendChild(botao);
    }
}

function verificarLetra(letra, botao) {
    botao.disabled = true; // Desativa o botão clicado

    if (palavraEscolhida.includes(letra)) {
        letrasAdivinhadas.push(letra);
        botao.classList.add("correta");
        desenharPalavra();
    } else {
        errosRestantes--;
        botao.classList.add("errada");
        errosContagem.textContent = errosRestantes;
        
        // Atualiza o perigo do robô baseado nos erros
        atualizarStatusRobo();
    }
}

function atualizarStatusRobo() {
    const porcentagens = {
        5: "⚠️ Robô Iniciando... (15% de upload)",
        4: "⚠️ Robô Processando dados falsos... (35% de upload)",
        3: "⚠️ Robô Espalhando boots... (55% de upload)",
        2: "🔥 PERIGO! Servidores sendo atacados... (75% de upload)",
        1: "🔥 CRÍTICO! IA prestes a disparar em massa... (90% de upload)",
        0: "💀 GAME OVER! O Robô completou o upload da Fake News."
    };

    statusRobo.textContent = percentages[errosRestantes] || "";

    if (errosRestantes === 0) {
        statusRobo.style.color = "#dc3545";
        palavraContainer.innerHTML = palavraEscolhida; // Revela a palavra
        bloquearTeclado();
    }
}

function bloquearTeclado() {
    const botoes = tecladoContainer.querySelectorAll("button");
    botoes.forEach(b => b.disabled = true);
}

// Ouvinte do botão Próxima Palavra
btnProxima.addEventListener("click", iniciarJogo);

// Inicializa o jogo assim que a página carrega
document.addEventListener("DOMContentLoaded", iniciarJogo);
