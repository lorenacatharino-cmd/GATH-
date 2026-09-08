// --- CONTROLE DE ACESSIBILIDADE ---

let currentFontSize = 100; // Tamanho base da fonte em %
const body = document.body;

// 1. Aumentar Fonte
document.getElementById('btn-increase-font').addEventListener('click', () => {
  if (currentFontSize < 140) {
    currentFontSize += 10;
    document.documentElement.style.fontSize = `${currentFontSize}%`;
  }
});

// 2. Diminuir Fonte
document.getElementById('btn-decrease-font').addEventListener('click', () => {
  if (currentFontSize > 80) {
    currentFontSize -= 10;
    document.documentElement.style.fontSize = `${currentFontSize}%`;
  }
});

// 3. Alternar Alto Contraste
document.getElementById('btn-toggle-contrast').addEventListener('click', () => {
  body.classList.toggle('high-contrast');
});

// 4. Ajustar Luz / Brilho da Tela
document.getElementById('btn-toggle-light').addEventListener('click', () => {
  body.classList.toggle('dim-light');
});

// 5. Leitor de Tela (Sintetizador de Voz para texto selecionado)
document.getElementById('btn-read-screen').addEventListener('click', () => {
  const selectedText = window.getSelection().toString();
  
  if (selectedText) {
    const utterance = new SpeechSynthesisUtterance(selectedText);
    utterance.lang = 'pt-BR';
    window.speechSynthesis.speak(utterance);
  } else {
    const defaultText = "Selecione qualquer texto da página com o mouse para ouvir a leitura.";
    const utterance = new SpeechSynthesisUtterance(defaultText);
    utterance.lang = 'pt-BR';
    window.speechSynthesis.speak(utterance);
  }
});


// --- LÓGICA DO MODAL DE COMPRA ---

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

// Fechar ao clicar fora do modal
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};

// Processar formulário de compra
function handlePurchase(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const car = modalCarName.textContent;
  
  alert(`Obrigado, ${name}! Seu pedido de reserva do ${car} foi enviado com sucesso. Nossa equipe entrará em contato em breve.`);
  
  // Limpar e fechar
  document.getElementById('purchase-form').reset();
  closeModal();
}
