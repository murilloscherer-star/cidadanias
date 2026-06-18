document.addEventListener("DOMContentLoaded", () => {
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
