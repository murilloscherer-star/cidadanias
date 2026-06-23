// Banco de dados dos cenários do jogo
const cenarios = [
    {
        texto: "Seu amigo mandou um vídeo de um candidato político confessando um crime. A voz parece robótica e os lábios não sincronizam bem. O que você faz?",
        escolhaCorreta: "delete"
    },
    {
        texto: "Um portal famoso publicou uma notícia urgente sobre uma nova cura para uma doença, com links para fontes científicas reais. O que você faz?",
        escolhaCorreta: "share"
    },
    {
        texto: "Mensagem no grupo da família diz que o governo vai cancelar a internet amanhã. O link é de um blog cheio de anúncios e erros de português. O que você faz?",
        escolhaCorreta: "delete"
    }
];

let cenarioAtual = 0;
let reputacao = 100;

// Mapeamento dos elementos do HTML
const btnStart = document.getElementById('start-btn');
const btnRestart = document.getElementById('restart-btn');
const btnShare = document.getElementById('choice-share');
const btnDelete = document.getElementById('choice-delete');
const btnDarkMode = document.getElementById('toggle-dark-mode');

const viewIntro = document.getElementById('game-intro');
const viewPlay = document.getElementById('game-play');
const viewGameOver = document.getElementById('game-over');

const txtQuestionNumber = document.getElementById('question-number');
const txtScenery = document.getElementById('scenery-text');
const txtFinalMessage = document.getElementById('final-message');
const barReputation = document.getElementById('reputation-bar');

// Função para iniciar o jogo
function iniciarJogo() {
    cenarioAtual = 0;
    reputacao = 100;
    atualizarBarra();
    viewIntro.classList.add('hidden');
    viewGameOver.classList.add('hidden');
    viewPlay.classList.remove('hidden');
    carregarCenario();
}

// Função para carregar os textos na tela
function carregarCenario() {
    if (cenarioAtual < cenarios.length) {
        txtQuestionNumber.innerText = `Cenário ${cenarioAtual + 1}`;
        txtScenery.innerText = cenarios[cenarioAtual].texto;
    } else {
        finalizarJogo();
    }
}

// Função para processar a escolha do usuário
function processarEscolha(escolha) {
    const respostaCorreta = cenarios[cenarioAtual].escolhaCorreta;
    
    if (escolha !== respostaCorreta) {
        reputacao -= 35; // Remove pontos se errar
        if (reputacao < 0) reputacao = 0;
    } else {
        reputacao += 10; // Bônus leve se acertar
        if (reputacao > 100) reputacao = 100;
    }
    
    atualizarBarra();
    cenarioAtual++;
    carregarCenario();
}

// Atualiza o visual da barra de progresso
function atualizarBarra() {
    barReputation.style.width = `${reputacao}%`;
    barReputation.innerText = `${reputacao}%`;
}

// Mostra a tela final do jogo
function finalizarJogo() {
    viewPlay.classList.add('hidden');
    viewGameOver.classList.remove('hidden');
    
    if (reputacao >= 70) {
        txtFinalMessage.innerText = `Parabéns! Sua reputação final foi de ${reputacao}%. Você é um CyberCidadão exemplar!`;
    } else {
        txtFinalMessage.innerText = `Fim de jogo! Sua reputação caiu para ${reputacao}%. Você precisa treinar mais suas habilidades de checagem.`;
    }
}

// Ouvintes de eventos (Cliques)
btnStart.addEventListener('click', iniciarJogo);
btnRestart.addEventListener('click', iniciarJogo);
btnShare.addEventListener('click', () => processarEscolha('share'));
btnDelete.addEventListener('click', () => processarEscolha('delete'));

// Alternador de Modo Escuro do Jogo
btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
