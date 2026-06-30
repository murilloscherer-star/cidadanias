# Portal de Conscientização Comunitária: Forca da Cidadania Digital 🛡️

Este projeto é um portal funcional e interativo desenvolvido para conscientizar a comunidade escolar e a sociedade sobre um dos debates mais urgentes da atualidade tecnológica. O site ensina a identificar mídias manipuladas por inteligência artificial (deepfakes), alerta sobre os perigos da desinformação automatizada e promove a cidadania digital através de dinâmicas interativas.

Projeto desenvolvido para a entrega final da disciplina de **Educação Digital e IA - Ensino Médio** (Julho de 2026).

---

## 🎯 Objetivos do Tema Central

O portal aborda o tema *"Cidadania Digital e Inteligência Artificial: O Impacto das Deepfakes e da Desinformação na Sociedade"*, visando atingir os seguintes impactos:
1. **Educação Midiática:** Capacitar cidadãos comuns a reconhecerem os rastros e as inconsistências biológicas deixadas por mídias geradas por IA (Deepfakes).
2. **Combate à Desinformação:** Alertar sobre como o ecossistema digital (algoritmos, redes de bots e ataques de phishing) infla mentiras deliberadas de forma automatizada para polarizar a sociedade.
3. **Engajamento Ativo:** Utilizar a gamificação (através do jogo da forca conceitual) e formulários de quiz interativos para fixar definições essenciais de segurança e ética digital.

---

## 💻 Tecnologias Utilizadas

O desenvolvimento foi construído do zero, sem o uso de frameworks ou templates prontos, prezando por uma arquitetura limpa e semântica:
* **HTML5 Semântico:** Estruturação avançada utilizando tags fundamentais como `<main>`, `<section>`, `<header>`, `<form>` e `<footer>`, garantindo total legibilidade mecânica do código.
* **CSS3 Avançado (Flexbox, Grid & Variables):** Arquitetura visual proprietária e responsiva. Uso de CSS Variables para implementação dinâmica de temas, Layout em Flexbox/Grid para os componentes e *Media Queries* para adaptação mobile completa.
* **Vanilla JavaScript (ES6+):** Manipulação avançada do DOM (Document Object Model), captura dinâmica de eventos do usuário, processamento de formulários locais sem recarregamento de página e controle de estados para lógica de acessibilidade e gamificação.
* **Gráficos SVG:** Renderização nativa vetorial direta no HTML para desenhar a estrutura física e as partes da forca dinamicamente.

---

## ⚙️ Funcionalidades de Destaque (Rubricas de Avaliação)

* **Jogo da Forca Conceitual:** Um banco de dados nativo em JavaScript contendo conceitos centrais sobre IA e desinformação. O jogo exibe dicas contextuais e, ao término, abre um bloco pedagógico explicando o impacto daquele conceito na sociedade.
* **Quiz Anti-Desinformação Dinâmico:** Formulário interativo de coleta de dados que valida as respostas em tempo real através do arquivo `script.js`, exibindo alertas estilizados de erro ou acerto sem dependências externas.
* **Barra de Acessibilidade (Modo Escuro):** Um controlador dinâmico no topo do site que altera o atributo `data-theme` na raiz do documento, alterando as paletas e contrastes de cores de forma fluida para o conforto visual do usuário.
* **Responsividade Nativa:** Ajuste milimétrico do layout para smartphones e tablets via `@media`, modificando a disposição do teclado e formulários para telas verticais.

---

## 🤖 Comandos e Prompts de IA Utilizados

Seguindo as diretrizes de ética e transparência digital, os seguintes prompts estruturados foram utilizados como copilotos para o refinamento e refatoração do código original:

1. *Para unificação estrutural:*
   > "Atue como um desenvolvedor web sênior. Receba este código original de um jogo de forca e o refatore utilizando tags semânticas do HTML5 (main, section, footer). Integre um novo formulário de quiz sobre deepfakes e um botão de modo escuro para acessibilidade, garantindo que o console do navegador não apresente erros de script."

2. *Para arquitetura CSS responsiva e temas:*
   > "Crie regras CSS utilizando Flexbox para estruturar verticalmente duas seções principais (Jogo e Quiz). Configure variáveis de ambiente `:root` e um seletor `[data-theme="dark"]` que inverta as paletas de cores mantendo o contraste e a identidade visual cibernética. Adicione Media Queries para telas abaixo de 600px para empilhar os elementos e expandir os botões para 100% de largura."

3. *Para revisão ética de conteúdo:*
   > "Revise os blocos textuais pedagógicos do banco de dados para garantir que a abordagem sobre vieses de IA, deepfakes e fake news seja estritamente neutra, informativa e focada em conscientização digital comunitária para o Ensino Médio."

---

## 📁 Organização do Repositório

O repositório está limpo, sem arquivos mortos ou temporários de testes, estruturado conforme as exigências oficiais:
```text
├── index.html        # Página principal com marcação semântica e SVG
├── style.css         # Estilização visual, variáveis de tema e responsividade
├── script.js        # Lógica da forca, validação do quiz e acessibilidade
└── README.md         # Documentação e diretrizes do projeto
```

*Este projeto foi publicado com sucesso no **GitHub Pages** e utiliza a tag oficial **#cidadaniadigital2026** configurada nos tópicos do repositório.*

