document.addEventListener('DOMContentLoaded', () => {
  // Seletores
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');
  const banners = document.querySelectorAll('.banner');
  const arrowLeft = document.querySelector('.arrow.left');
  const arrowRight = document.querySelector('.arrow.right');
  const linkProdutos = document.querySelector('a[href="#produtos"]');
  const voltarInicio = document.getElementById('voltarInicio');

  // Variáveis de controle
  let currentBanner = 0;
  const totalBanners = banners.length;

  // Função para alternar o menu responsivo
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Função para exibir o banner atual
  const showBanner = (index) => {
    banners.forEach((banner) => banner.classList.remove('active'));
    banners[index].classList.add('active');
  };

  // Navegação pelos banners
  arrowLeft.addEventListener('click', () => {
    currentBanner = (currentBanner === 0) ? totalBanners - 1 : currentBanner - 1;
    showBanner(currentBanner);
  });

  arrowRight.addEventListener('click', () => {
    currentBanner = (currentBanner === totalBanners - 1) ? 0 : currentBanner + 1;
    showBanner(currentBanner);
  });

  // Inicializa o primeiro banner como ativo
  showBanner(currentBanner);

  // Scroll suave para a seção "produtos"
  if (linkProdutos) {
    linkProdutos.addEventListener('click', (e) => {
      e.preventDefault();
      const produtosSection = document.querySelector('.produtos');
      if (produtosSection) {
        produtosSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Redirecionar para a página principal
  if (voltarInicio) {
    voltarInicio.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
});

//login
const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtendo os valores dos campos
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Validações básicas
    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Simulando validação de login (substitua por lógica de backend real)
    if (email === 'usuario@exemplo.com' && senha === '123456') {
      alert('Login bem-sucedido!');
      // Redirecionar para outra página
      window.location.href = 'pagina-principal.html';
    } else {
      alert('Email ou senha incorretos.');
    }
  });
