// Função para alternar a exibição das tecnologias front-end
function toggleTecFront() {
    const iconFront = document.querySelector(".front i");
    const tecsFront = document.querySelector(".tecFront");
    iconFront.classList.toggle("iconOpen");
    tecsFront.classList.toggle("open");
}

// Evento de clique para as tecnologias front-end
document.querySelector(".front").addEventListener("click", toggleTecFront);

// Função para alternar a exibição das tecnologias back-end
function toggleTecBack() {
    const iconBack = document.querySelector(".back i");
    const tecsBack = document.querySelector(".tecBack");
    iconBack.classList.toggle("iconOpen");
    tecsBack.classList.toggle("open");
}

// Evento de clique para as tecnologias back-end
document.querySelector(".back").addEventListener("click", toggleTecBack);

// Inicialização do ScrollReveal
window.sr = ScrollReveal({ reset: true });

// Elementos a serem revelados com o ScrollReveal
const elementsToReveal = [
    '.inicio',
    '.sobre',
    '.front',
    '.back',
    '.projetos',
    '.projeto',
    '.footer',
    '.textcenter'
];

// Função para revelar os elementos com o ScrollReveal
function revealElements() {
    elementsToReveal.forEach(element => {
        sr.reveal(element, { duration: 1000 });
    });
}

// Chamar a função para revelar os elementos ao carregar a página
revealElements();

// Função para controlar a abertura e fechamento do menu móvel
function toggleMenu() {
    const menu = document.querySelector(".topnav");
    menu.style.height = menu.style.height === "60px" ? "auto" : "60px";
}

// Evento de clique para abrir/fechar o menu móvel
document.querySelector(".icon").addEventListener("click", toggleMenu);
