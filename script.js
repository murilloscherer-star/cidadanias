// ============================================================================
// 1. BANCO DE DADOS (Mantido Original e Temático)
// ============================================================================
const wordsDatabase = [
    { 
        word: "DEEPFAKE", 
        tip: "Vídeos ou áudios realistas gerados por IA para simular a fala e ações de pessoas reais.",
        edu: "As deepfakes são usadas para aplicar golpes, arruinar reputações e manipular debates políticos, tornando difícil discernir o que é real na internet."
    },
    { 
        word: "ALGORITMO", 
        tip: "Mecanismo que decide quais postagens aparecem primeiro nas suas redes sociais.",
        edu: "Os algoritmos priorizam conteúdos que geram forte engajamento emocional (como ódio e polêmica), o que facilita a propagação rápida de desinformação."
    },
    { 
        word: "DESINFORMACAO", 
        tip: "Criação e compartilhamento deliberado de informações falsas para enganar e obter vantagens.",
        edu: "Diferente do erro honesto, a desinformação é uma estratégia armada para distorcer a percepção pública, corroer a confiança nas instituições e polarizar a sociedade."
    },
    { 
        word: "COMPROVACAO", 
        tip: "Ato essencial de checar a veracidade de uma notícia antes de clicar em compartilhar.",
        edu: "A checagem de fatos (Fact-checking) é o pilar da cidadania digital. Verificar fontes oficiais quebra o ciclo de compartilhamento de fake news."
    },
    { 
        word: "BOTS", 
        tip: "Contas automatizadas programadas para simular comportamento humano em massa nas redes.",
        edu: "Redes de robôs são frequentemente compradas para inflar artificialmente hashtags, criar falsos consensos políticos e silenciar vozes legítimas."
    },
    { 
        word: "ALFABETIZACAO", 
        tip: "Habilidade de ler, analisar de forma crítica e produzir conteúdos na mídia digital.",
        edu: "A alfabetização midiática capacita os cidadãos a identificarem vieses, propagandas e manipulações visuais em plataformas digitais."
    },
    { 
        word: "PRIVACIDADE", 
        tip: "Direito de controlar a coleta e o uso dos seus dados pessoais por sistemas de IA.",
        edu: "Empresas cruzam seus dados de navegação para criar perfis psicológicos profundos, permitindo que anúncios políticos direcionados manipulem sua intenção de voto."
    },
    { 
        word: "VIES", 
        tip: "Preconto ou tendência sistemática presente nos dados usados para treinar uma Inteligência Artificial.",
        edu: "Se os dados de treinamento forem discriminatórios, a IA perpetuará racismos e injustiças de forma automatizada no mercado de trabalho e segurança pública."
    }
];

// Variables de controle do Jogo
let selectedWordObj;
let selectedWord;
let guessedLetters;
let wrongAttempts;
const maxAttempts = 6;
const bodyParts = ["head", "body", "left-arm", "right-arm", "left-leg", "right-leg"];

// Elementos capturados do DOM para o Jogo
const wordDisplay = document.getElementById("word-display");
const keyboardContainer = document.getElementById("keyboard");
const attemptsSpan = document.getElementById("attempts");
const tipText = document.getElementById("tip-text");
const resetBtn = document.getElementById("reset-btn");
const modal = document.getElementById("result-modal");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const eduText = document.getElementById("edu-text");
const modalBtn = document.getElementById("modal-btn");

// ============================================================================
// 2. LÓGICA DO JOGO DA FORCA ORIGINAL (Mantida Intacta)
// ============================================================================
function initGame() {
    selectedWordObj = wordsDatabase[Math.floor(Math.random() * wordsDatabase.length)];
    selectedWord = selectedWordObj.word;
    
    guessedLetters = [];
    wrongAttempts = 0;
    attemptsSpan.innerText = maxAttempts - wrongAttempts;
    tipText.innerText = selectedWordObj.tip;

    bodyParts.forEach(part => {
        document.getElementById(part).classList.remove("show");
    });

    modal.classList.remove("show");

    createWordDisplay();
    createKeyboard();
}

function createWordDisplay() {
    wordDisplay.innerHTML = "";
    for (let letter of selectedWord) {
        const slot = document.createElement("div");
        if (letter === " ") {
            slot.classList.add("letter-slot", "space");
        } else {
            slot.classList.add("letter-slot");
            slot.innerText = guessedLetters.includes(letter) ? letter : "";
        }
        wordDisplay.appendChild(slot);
    }
}

function createKeyboard() {
    keyboardContainer.innerHTML = "";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (let letter of alphabet) {
        const button = document.createElement("button");
        button.innerText = letter;
        button.classList.add("key");
        button.addEventListener("click", () => handleGuess(letter, button));
        keyboardContainer.appendChild(button);
    }
}

function handleGuess(letter, button) {
    button.disabled = true;

    if (selectedWord.includes(letter)) {
        button.classList.add("correct");
        guessedLetters.push(letter);
        createWordDisplay();
        checkWin();
    } else {
        button.classList.add("wrong");
        drawBodyPart();
        wrongAttempts++;
        attemptsSpan.innerText = maxAttempts - wrongAttempts;
        checkLose();
    }
}

function drawBodyPart() {
    const partId = bodyParts[wrongAttempts];
    if (partId) {
        document.getElementById(partId).classList.add("show");
    }
}

function checkWin() {
    const cleanWord = selectedWord.replace(/\s/g, '');
    const hasWon = [...cleanWord].every(letter => guessedLetters.includes(letter));
    if (hasWon) {
        showEndModal("Você Acertou! 🛡️", `A palavra conceitual é: ${selectedWord}`, true);
    }
}

function checkLose() {
    if (wrongAttempts >= maxAttempts) {
        showEndModal("O Conhecimento Perdeu... 💥", `A resposta correta era: ${selectedWord}`, false);
    }
}

function showEndModal(title, message, isWin) {
    modalTitle.innerText = title;
    modalTitle.style.color = isWin ? "var(--accent-color)" : "var(--wrong-color)";
    modalMessage.innerText = message;
    
    eduText.innerText = selectedWordObj.edu;
    modal.classList.add("show");
}

resetBtn.addEventListener("click", initGame);
modalBtn.addEventListener("click", initGame);


// ============================================================================
// 3. NOVOS ELEMENTOS OBRIGATÓRIOS (Rubricas de JavaScript e Acessibilidade)
// ============================================================================

// --- Controle de Acessibilidade (Botão de Modo Escuro) ---
const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
toggleDarkModeBtn.addEventListener("click", () => {
    // Verifica se a tag customizada do tema escuro já está ativa no elemento html
    const isDarkMode = document.documentElement.getAttribute("data-theme") === "dark";
    
    if (isDarkMode) {
        document.documentElement.removeAttribute("data-theme");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
    }
});

// --- Validador Dinâmico do Quiz de Conscientização ---
const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");

quizForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio do formulário tradicional e recarregamento
    
    const selectedAnswer = document.getElementById("quiz-q1").value;
    
    // Altera e manipula dinamicamente classes e textos do DOM com respostas estruturadas
    quizResult.classList.remove("hidden");
    
    if (selectedAnswer === "correta") {
        quizResult.innerHTML = "<strong>✅ Resposta Correta!</strong> Piscar de forma não natural, falhas ao redor das bordas do rosto e iluminações inconsistentes são as principais pistas de que uma inteligência artificial manipulou aquele vídeo.";
        quizResult.className = "quiz-feedback correct-box";
    } else {
        quizResult.innerHTML = "<strong>❌ Tente Novamente!</strong> Embora a alta definição exista, ela não serve como método para confirmar adulteração. Foque nos sinais biológicos (olhos, boca e sombras).";
        quizResult.className = "quiz-feedback wrong-box";
    }
});

// Inicialização Geral do Website
window.onload = () => {
    initGame();
};
