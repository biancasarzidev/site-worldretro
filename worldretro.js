document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        
        navMenu.classList.toggle('active');

       
        hamburger.classList.toggle('active');
    });
});

let currentBanner = 0;
const banners = document.querySelectorAll('.banner');
const totalBanners = banners.length;

const showBanner = (index) => {
  banners.forEach((banner, i) => {
    banner.classList.remove('active');
    if (i === index) {
      banner.classList.add('active');
    }
  });
};

// Navegação para a seta esquerda
document.querySelector('.arrow.left').addEventListener('click', () => {
  currentBanner = (currentBanner === 0) ? totalBanners - 1 : currentBanner - 1;
  showBanner(currentBanner);
});

// Navegação para a seta direita
document.querySelector('.arrow.right').addEventListener('click', () => {
  currentBanner = (currentBanner === totalBanners - 1) ? 0 : currentBanner + 1;
  showBanner(currentBanner);
});

// Inicializa o primeiro banner como ativo
showBanner(currentBanner);
