# cidadanias<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cidadania Digital & IA</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <header>
        <h1>Cidadania Digital & IA</h1>
        <p>O Impacto das Deepfakes e da Desinformação na Sociedade</p>
        <button id="toggle-dark-mode">Alternar Tema 🌙</button>
    </header>

    <main>
        <section class="card">
            <h2>O que são Deepfakes?</h2>
            <p>Deepfakes são vídeos, áudios ou imagens modificados de forma realista por meio de algoritmos de Inteligência Artificial. Embora a tecnologia possa ser usada para o entretenimento, ela frequentemente é aplicada para criar conteúdos enganosos, arruinar reputações e espalhar desinformação em massa.</p>
        </section>

        <section class="card">
            <h2>Como identificar a Desinformação?</h2>
            <ul>
                <li><strong>Verifique a fonte:</strong> O portal de notícias é confiável?</li>
                <li><strong>Analise os detalhes:</strong> Deepfakes costumam ter falhas no piscar de olhos ou na sincronia da fala.</li>
                <li><strong>Cruze informações:</strong> Procure a mesma notícia em outros veículos de comunicação conhecidos.</li>
                <li><strong>Não compartilhe por impulso:</strong> Na dúvida, não repasse.</li>
            </ul>
        </section>

        <section class="card quiz-section">
            <h2>Desafio: Você sabe identificar uma Fake News?</h2>
            <p>Leia a frase abaixo e responda se ela é Verdadeira ou Falsa:</p>
            <blockquote class="headline">"Vídeo mostra robô controlado por IA correndo pelas ruas a 100km/h e perseguindo pedestres."</blockquote>
            
            <form id="quiz-form">
                <div class="options">
                    <label>
                        <input type="radio" name="quiz-answer" value="verdadeiro"> Verdadeiro
                    </label>
                    <label>
                        <input type="radio" name="quiz-answer" value="falso"> Falso (É Fake!)
                    </label>
                </div>
                <button type="submit" class="btn-submit">Enviar Resposta</button>
            </form>
            <div id="quiz-result" class="result-message"></div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 - Projeto Escolar de Educação Digital e IA</p>
        <p>Desenvolvido para fins educacionais.</p>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
