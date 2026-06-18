document.addEventListener("DOMContentLoaded", () => {
    
    // Configuração do Modo Escuro
    const toggleBtn = document.getElementById("toggle-dark-mode");
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "Alternar Tema ☀️" : "Alternar Tema 🌙";
    });

    // Dados do Jogo (Cenários)
    const scenarios = [
        {
            text: "Um vídeo do Diretor da escola circulou no WhatsApp cancelando as aulas de amanhã. O movimento da boca dele está um pouco travado e o áudio robótico. O que você faz?",
            correctChoice: "delete", // Apagar e Investigar é o certo
            damage: 30,
            feedbackCerto: "Boa! Era uma Deepfake criada para enganar os alunos.",
            feedbackErrado: "Poxa! Você espalhou uma Deepfake e gerou caos desnecessário."
        },
        {
            text: "Um site desconhecido afirma que uma IA descobriu a cura para todas as doenças, mas pede seus dados cadastrais para liberar a matéria completa. O que faz?",
            correctChoice: "delete",
            damage: 35,
            feedbackCerto: "Exato! Sites suspeitos usam manchetes absurdas geradas por IA para roubar dados.",
            feedbackErrado: "Cuidado! Você caiu em um golpe de phishing de dados."
        },
        {
            text: "Seu amigo te envia uma notícia urgente de um grande portal de notícias verificado confirmando novas regras de segurança digital na sua cidade.",
            correctChoice: "share", // Compartilhar informação real é aceitável
            damage: 25,
            feedbackCerto: "Correto! Informações de fontes checadas e confiáveis ajudam a comunidade.",
            feedbackErrado: "Você ignorou uma utilidade pública importante de uma fonte segura."
        }
    ];

    // Variáveis de Controle do Estado
    let currentScenarioIndex = 0;
    let reputation = 100;

    // Elementos da Interface (DOM)
    const introDiv = document.getElementById("game-intro");
    const playDiv = document.getElementById("game-play");
    const overDiv = document.getElementById("game-over");
    
    const startBtn = document.getElementById("start-btn");
    const restartBtn = document.getElementById("restart-btn");
    const shareBtn = document.getElementById("choice-share");
    const deleteBtn = document.getElementById("choice-delete");
    
    const labelNumber = document.getElementById("question-number");
    const textScenery = document.getElementById("scenery-text");
    const barReputation = document.getElementById("reputation-bar");
    const finalMessage = document.getElementById("final-message");

    // Inicialização do Jogo
    startBtn.addEventListener("click", () => {
        introDiv.classList.add("hidden");
        playDiv.classList.remove("hidden");
        loadScenario();
    });

    restartBtn.addEventListener("click", () => {
        currentScenarioIndex = 0;
        reputation = 100;
        updateBar();
        overDiv.classList.add("hidden");
        playDiv.classList.remove("hidden");
        loadScenario();
    });

    function loadScenario() {
        if (currentScenarioIndex < scenarios.length) {
            labelNumber.textContent = `Cenário ${currentScenarioIndex + 1} de ${scenarios.length}`;
            textScenery.textContent = scenarios[currentScenarioIndex].text;
        } else {
            endGame();
        }
    }

    // Processamento da escolha do usuário
    function handleChoice(playerChoice) {
        const currentScenario = scenarios[currentScenarioIndex];
        
        if (playerChoice === currentScenario.correctChoice) {
            alert(`✅ ${currentScenario.feedbackCerto}`);
        } else {
            alert(`❌ ${currentScenario.feedbackErrado}`);
            reputation -= currentScenario.damage;
            if (reputation < 0) reputation = 0;
            updateBar();
        }

        currentScenarioIndex++;
        loadScenario();
    }

    function updateBar() {
        barReputation.style.width = `${reputation}%`;
        barReputation.textContent = `${reputation}%`;
        
        if (reputation < 40) {
            barReputation.style.backgroundColor = "#e63946"; // Vermelho se crítico
        } else {
            barReputation.style.backgroundColor = "#2a9d8f"; // Verde normal
        }
    }

    function endGame() {
        playDiv.classList.add("hidden");
        overDiv.classList.remove("hidden");

        if (reputation >= 70) {
            finalMessage.textContent = `Parabéns! Sua reputação terminou em ${reputation}%. Você provou ser um CyberCidadão consciente e mestre em combater a desinformação!`;
        } else {
            finalMessage.textContent = `Fim de jogo! Sua reputação caiu para ${reputation}%. Você acabou compartilhando boatos artificiais ou ignorando alertas importantes. Estude mais sobre segurança digital!`;
        }
    }

    shareBtn.addEventListener("click", () => handleChoice("share"));
    deleteBtn.addEventListener("click", () => handleChoice("delete"));
}); document.addEventListener("DOMContentLoaded", () => {
    // 1. Funcionalidade do Modo Escuro
    const toggleButton = document.getElementById("toggle-dark-mode");
    
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        // Atualiza o texto do botão de acordo com o tema ativo
        if (document.body.classList.contains("dark-mode")) {
            toggleButton.textContent = "Alternar Tema ☀️";
        } else {
            toggleButton.textContent = "Alternar Tema 🌙";
        }
    });

    // 2. Validador do Quiz sobre Fake News
    const quizForm = document.getElementById("quiz-form");
    const resultMessage = document.getElementById("quiz-result");

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        const selectedOption = document.querySelector('input[name="quiz-answer"]:checked');

        if (!selectedOption) {
            resultMessage.textContent = "Por favor, selecione uma resposta antes de enviar!";
            resultMessage.style.color = "orange";
            return;
        }

        if (selectedOption.value === "falso") {
            resultMessage.textContent = "Correto! 🎉 A notícia é falsa. Esse vídeo foi gerado por computação gráfica e IA para enganar as pessoas.";
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = "Incorreto. ❌ Essa notícia é Falsa! Sempre cheque os fatos antes de acreditar.";
            resultMessage.style.color = "red";
        }
    });
});
