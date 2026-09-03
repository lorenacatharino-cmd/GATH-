// script.js

// Controle do Tema (Claro / Noturno)
const btnTheme = document.getElementById('btn-theme');

btnTheme.addEventListener('click', () => {
  const body = document.body;
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    btnTheme.innerText = 'Modo Escuro';
  } else {
    body.setAttribute('data-theme', 'dark');
    btnTheme.innerText = 'Modo Claro';
  }
});

// Controle do Tamanho da Fonte
let currentFontSize = 16;

const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnReset = document.getElementById('btn-reset');

function setFontSize(size) {
  document.documentElement.style.setProperty('--font-size-base', size + 'px');
}

btnIncrease.addEventListener('click', () => {
  if (currentFontSize < 24) {
    currentFontSize += 2;
    setFontSize(currentFontSize);
  }
});

btnDecrease.addEventListener('click', () => {
  if (currentFontSize > 12) {
    currentFontSize -= 2;
    setFontSize(currentFontSize);
  }
});

btnReset.addEventListener('click', () => {
  currentFontSize = 16;
  setFontSize(currentFontSize);
});

// Simulação da Ação de Compra
const buyButtons = document.querySelectorAll('.btn-buy');

buyButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const modelName = event.target.getAttribute('data-model');
    alert(`Obrigado pelo interesse no ${modelName}! Você será redirecionado para a etapa de pagamento.`);
  });
});
