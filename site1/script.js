// Seleciona todos os cards da playlist

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove a classe 'active' de todos os cards
        cards.forEach(c => c.classList.remove('ativo'));

        // Adiciona a classe 'active' ao card clicado
        card.classList.add('ativo');
    });
});

// Botão play/pause

const startButton = document.getElementById('start-button');
let isPlaying = false;

startButton.addEventListener('click', () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
        startButton.textContent = '⏸ Pausar';
        startButton.classList.add('tocando');
    } else {
        startButton.textContent = '▶ Tocar';
        startButton.classList.remove('tocando');
    }
});