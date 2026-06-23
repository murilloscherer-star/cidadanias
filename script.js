// Controle do Quiz da página informativa
const quizForm = document.getElementById('quiz-form');
const quizResult = document.getElementById('quiz-result');
const btnDarkMode = document.getElementById('toggle-dark-mode');

if (quizForm) {
    quizForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede a página de recarregar
        
        // Captura a opção selecionada
        const selectedOption = document.querySelector('input[name="quiz-answer"]:checked');
        
        if (!selectedOption) {
            quizResult.innerText = "Por favor, selecione uma resposta antes de enviar!";
            quizResult.style.color = "orange";
            return;
        }
        
        // Valida se a resposta está correta
        if (selectedOption.value === 'falso') {
            quizResult.innerText = "✅ Correto! Esse vídeo é falso. Robôs atuais não correm de forma autônoma caçando pessoas a essa velocidade. É uma animação digital para assustar internautas.";
            quizResult.style.color = "green";
        } else {
            quizResult.innerText = "❌ Incorreto! Isso é uma Fake News gerada por computação gráfica ou IA. Sempre verifique canais oficiais de checagem.";
            quizResult.style.color = "red";
        }
    });
}

// Alternador de Modo Escuro da página principal
if (btnDarkMode) {
    btnDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
}

