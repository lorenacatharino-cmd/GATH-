// --- SISTEMA DE ACESSIBILIDADE ---
let currentFontSize = 100;
const body = document.body;

// Aumentar Fonte
document.getElementById('btn-increase-font').addEventListener('click', () => {
  if (currentFontSize < 130) {
    currentFontSize += 10;
    document.documentElement.style.fontSize = `${currentFontSize}%`;
  }
});

// Diminuir Fonte
document.getElementById('btn-decrease-font').addEventListener('click', () => {
  if (currentFontSize > 85) {
    currentFontSize -= 10;
    document.documentElement.style.fontSize = `${currentFontSize}%`;
  }
});

// Alternar Alto Contraste
document.getElementById('btn-toggle-contrast').addEventListener('click', () => {
  body.classList.toggle('high-contrast');
});

// Modo Brilho/Luz
document.getElementById('btn-toggle-light').addEventListener('click', () => {
  body.classList.toggle('dim-light');
});

// Leitor de Voz para Texto Selecionado
document.getElementById('btn-read-screen').addEventListener('click', () => {
  const selectedText = window.getSelection().toString();
  
  if (selectedText) {
    const utterance = new SpeechSynthesisUtterance(selectedText);
    utterance.lang = 'pt-BR';
    window.speechSynthesis.speak(utterance);
  } else {
    const defaultText = "Por favor, selecione qualquer trecho de texto da página para utilizar a leitura por voz.";
    const utterance = new SpeechSynthesisUtterance(defaultText);
    utterance.lang = 'pt-BR';
    window.speechSynthesis.speak(utterance);
  }
});

// --- LÓGICA DO MODAL ---
const modal = document.getElementById('buy-modal');
const modalCarName = document.getElementById('modal-car-name');
const modalCarPrice = document.getElementById('modal-car-price');

function openModal(carName, carPrice) {
  modalCarName.textContent = carName;
  modalCarPrice.textContent = carPrice;
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};

function handlePurchase(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const car = modalCarName.textContent;
  
  alert(`Solicitação confirmada, ${name}! Um especialista da GATH entrará em contato para agendar o atendimento do seu ${car}.`);
  
  document.getElementById('purchase-form').reset();
  closeModal();
}
