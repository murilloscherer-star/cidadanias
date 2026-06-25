// Banco de palavras temáticas (Tecnologia/Programação)
const wordsDatabase = [
    { word: "JAVASCRIPT", tip: "Linguagem de programação web" },
    { word: "COMPUTADOR", tip: "Máquina usada para processar dados" },
    { word: "INTERNET", tip: "Rede mundial de computadores" },
    { word: "ALGORITMO", tip: "Sequência de passos para resolver um problema" },
    { word: "BANCO", tip: "Local onde guardamos dados do sistema (Ex: ... de dados)" },
    { word: "ROUTER", tip: "Dispositivo que encaminha pacotes de rede" },
    { word: "PYTHON", tip: "Linguagem famosa pela sintaxe limpa e IA" },
    { word: "FRONTEND", tip: "Parte visual de um site com a qual o usuário interage" }
];

let selectedWordObj;
let selectedWord;
let guessedLetters;
let wrongAttempts;
const maxAttempts = 6;

// Elementos da interface do boneco na forca
const bodyParts = ["head", "body", "left-arm", "right-arm", "left-leg", "right-leg"];

// Elementos do DOM
const wordDisplay = document.getElementById("word-display");
const keyboardContainer = document.getElementById("keyboard");
const attemptsSpan = document.getElementById("attempts");
const tipText = document.getElementById("tip-text");
const resetBtn = document.getElementById("reset-btn");
const modal = document.getElementById("result-modal");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const modalBtn = document.getElementById("modal-btn");

// Inicia uma nova rodada
function initGame() {
    // Escolhe palavra aleatória
    selectedWordObj = wordsDatabase[Math.floor(Math.random() * wordsDatabase.length)];
    selectedWord = selectedWordObj.word;
    
    // Reseta estados
    guessedLetters = [];
    wrongAttempts = 0;
    attemptsSpan.innerText = maxAttempts - wrongAttempts;
    tipText.innerText = selectedWordObj.tip;

    // Limpa a forca visual
    bodyParts.forEach(part => {
        document.getElementById(part).classList.remove("show");
    });

    // Fecha o modal se estiver aberto
    modal.classList.remove("show");

    createWordDisplay();
    createKeyboard();
}

// Cria os espaços vazios da palavra na tela
function createWordDisplay() {
    wordDisplay.innerHTML = "";
    for (let letter of selectedWord) {
        const slot = document.createElement("div");
        slot.classList.add("letter-slot");
        slot.innerText = guessedLetters.includes(letter) ? letter : "";
        wordDisplay.appendChild(slot);
    }
}

// Cria o teclado virtual (A-Z)
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

// Processa o palpite da letra clicada
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

// Mostra a parte do corpo correspondente ao erro
function drawBodyPart() {
    const partId = bodyParts[wrongAttempts];
    if (partId) {
        document.getElementById(partId).classList.add("show");
    }
}

// Verifica se o jogador acertou todas as letras
function checkWin() {
    const hasWon = [...selectedWord].every(letter => guessedLetters.includes(letter));
    if (hasWon) {
        showEndModal("Você Venceu! 🎉", `Parabéns, você descobriu a palavra: ${selectedWord}`);
    }
}

// Verifica se o jogador estourou o limite de erros
function checkLose() {
    if (wrongAttempts >= maxAttempts) {
        showEndModal("Fim de Jogo 😢", `Que pena! A palavra certa era: ${selectedWord}`);
    }
}

// Exibe a tela de resultado final
function showEndModal(title, message) {
    modalTitle.innerText = title;
    modalMessage.innerText = message;
    modal.classList.add("show");
}

// Event Listeners para botões de reset
resetBtn.addEventListener("click", initGame);
modalBtn.addEventListener("click", initGame);

// Executa ao carregar a página
window.onload = initGame;
