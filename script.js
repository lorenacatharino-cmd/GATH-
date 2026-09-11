document.addEventListener('DOMContentLoaded', () => {
    // Configurações de Acessibilidade
    let currentFontSize = 16; // Tamanho padrão empx
    const minFontSize = 12;
    const maxFontSize = 24;

    const btnIncrease = document.getElementById('btn-font-increase');
    const btnDecrease = document.getElementById('btn-font-decrease');
    const btnContrast = document.getElementById('btn-contrast');

    // 1. Aumentar Tamanho da Fonte
    btnIncrease.addEventListener('click', () => {
        if (currentFontSize < maxFontSize) {
            currentFontSize += 2;
            document.documentElement.style.fontSize = `${currentFontSize}px`;
        }
    });

    // 2. Diminuir Tamanho da Fonte
    btnDecrease.addEventListener('click', () => {
        if (currentFontSize > minFontSize) {
            currentFontSize -= 2;
            document.documentElement.style.fontSize = `${currentFontSize}px`;
        }
    });

    // 3. Alternar Modo de Luz / Contraste (Escuro e Claro)
    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Interatividade dos botões de interesse
    const interestButtons = document.querySelectorAll('.btn-card');
    interestButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const carName = e.target.parentElement.querySelector('h3').innerText;
            alert(`Obrigado pelo interesse no ${carName}! Em breve nossa equipe entrará em contato.`);
        });
    });
});
