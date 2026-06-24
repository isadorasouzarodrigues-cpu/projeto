// Aguarda o carregamento do documento para evitar erros de execução no console
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Recurso de Acessibilidade: Botão de Modo Escuro
    const themeToggle = document.getElementById("theme-toggle");
    
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // 2. Lógica Interativa: Validador do Quiz Antidesinformação
    const quizForm = document.getElementById("quiz-form");
    const resultadoContainer = document.getElementById("resultado-container");
    const resultadoTexto = document.getElementById("resultado-texto");

    quizForm.addEventListener("submit", (event) => {
        // Impede que a página recarregue ao submeter o formulário
        event.preventDefault();

        // Captura as respostas marcadas pelo usuário
        const respostaUm = quizForm.q1.value;
        const respostaDois = quizForm.q2.value;

        // Processamento de variáveis para contagem de acertos
        let acertos = 0;

        if (respostaUm === "verdadeiro") acertos++;
        if (respostaDois === "verdadeiro") acertos++;

        // Manipulação dinâmica do DOM para exibir os resultados na tela
        resultadoTexto.innerHTML = `<strong>Você acertou ${acertos} de 2 perguntas!</strong><br>`;
        
        if (acertos === 2) {
            resultadoTexto.innerHTML += " Excelente! Seus escudos contra a desinformação por IA estão afiados.";
        } else {
            resultadoTexto.innerHTML += " Atenção redobrada! Releia nossas dicas de segurança para não ser enganado por Deepfakes.";
        }

        // Revela a div que estava escondida (reforça critério de complexidade)
        resultadoContainer.classList.remove("hidden");
    });
});
