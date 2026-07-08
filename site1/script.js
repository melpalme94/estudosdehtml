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

// Menu mobile

const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('aberto');
    const expandido = nav.classList.contains('aberto');
    menuToggle.setAttribute('aria-expanded', expandido);
});

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('aberto');
    });
});

// Remover faixa e atualizar contador

const contador = document.getElementById('contador');
const botoesRemover = document.querySelectorAll('.remover');

function atualizarContador() {
    const totalFaixas = document.querySelectorAll('.card').length;
    contador.textContent = `${totalFaixas} faixas na fila`;
}

botoesRemover.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        evento.stopPropagation(); // Evita que o evento de clique no card seja acionado
        const card = botao.closest('.card');
        card.remove();
        atualizarContador();
    });
});

document.querySelector('footer p').textContent =
    `© ${new Date().getFullYear()} Player Musical Interativo. Todos os direitos reservados.`;