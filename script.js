document.addEventListener("DOMContentLoaded", function () {
    
    // --- FUNCIONALIDADE 1: Alternador de Modo Escuro (Acessibilidade) ---
    const btnDarkMode = document.getElementById("toggle-dark-mode");
    
    btnDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // --- FUNCIONALIDADE 2: Validador do Quiz Antidesinformação ---
    const quizForm = document.getElementById("quiz-form");
    const resultadoDiv = document.getElementById("resultado-quiz");

    quizForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede a página de recarregar

        // Pega a resposta selecionada
        const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');

        if (!respostaSelecionada) return;

        // Remove classes anteriores
        resultadoDiv.className = "";

        // Validação da resposta
        if (respostaSelecionada.value === "correta") {
            resultadoDiv.textContent = "✓ Parabéns! Você acertou. Prestar atenção nos detalhes faciais e áudio é essencial para detectar Deepfakes.";
            resultadoDiv.classList.add("sucesso");
        } else {
            resultadoDiv.textContent = "✕ Resposta incorreta. Lembre-se: deepfakes costumam apresentar falhas físicas e movimentos faciais artificiais. Tente novamente!";
            resultadoDiv.classList.add("erro");
        }

        // Mostra a div de resultado
        resultadoDiv.classList.remove("hidden");
    });
});
