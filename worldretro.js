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

// Login
// Verifique se o formulário de login existe antes de adicionar o evento de clique
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
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
}

// Interação do botão de cadastro com a tela de login
document.getElementById('btnCadastro').addEventListener('click', function (event) {
  event.preventDefault(); // Impede o comportamento padrão do link

  const loginSection = document.getElementById('login');

  // Se a área de login já estiver visível, faz scroll até ela
  if (loginSection.style.display === 'block') {
    loginSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    loginSection.style.display = 'block'; // Exibe a área de login
    loginSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Seta dos produtos
// Selecionando os elementos
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');
const produtosLista = document.querySelector('.produtos-lista');

// Função para rolar para a esquerda
scrollLeft.addEventListener('click', () => {
  produtosLista.scrollBy({
    left: -200, // Mover 200px para a esquerda
    behavior: 'smooth'
  });
});

// Função para rolar para a direita
scrollRight.addEventListener('click', () => {
  produtosLista.scrollBy({
    left: 200, // Mover 200px para a direita
    behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Botão Home
  const homeButton = document.querySelector('a[href="#home"]');

  if (homeButton) {
    homeButton.addEventListener('click', (event) => {
      event.preventDefault(); // Evita o comportamento padrão do link
      window.scrollTo({
        top: 0, // Vai para o topo da página
        behavior: 'smooth', // Faz a rolagem suave
      });
    });
  } else {
    console.log('Botão Home não encontrado!');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Scroll suave para a seção "Contato"
  const contactLink = document.querySelector('a[href="#contact"]');

  if (contactLink) {
    contactLink.addEventListener('click', (event) => {
      event.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Simulação do envio do formulário
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Impede o envio real
      alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
      contactForm.reset(); // Limpa o formulário
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Seletores
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');
  const homeLink = document.querySelector('a[href="#home"]');
  const logo = document.querySelector('.logo');
  const contactLink = document.querySelector('a[href="#contact"]');
  const contactSection = document.getElementById('contact');

  // Função para alternar o menu responsivo
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Função para fazer o scroll suave para a seção "home" (menu principal)
  if (homeLink) {
    homeLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0, // Volta ao topo da página
        behavior: 'smooth'
      });
      navMenu.classList.remove('active'); // Fecha o menu hambúrguer
      hamburger.classList.remove('active'); // Fecha o ícone do menu hambúrguer
    });
  }

  // Funcionalidade para logo voltar ao menu principal
  if (logo) {
    logo.addEventListener('click', () => {
      window.scrollTo({
        top: 0, // Volta ao topo da página
        behavior: 'smooth'
      });
      navMenu.classList.remove('active'); // Fecha o menu hambúrguer
      hamburger.classList.remove('active'); // Fecha o ícone do menu hambúrguer
    });
  }

  // Scroll suave para a seção "Contato"
  if (contactLink) {
    contactLink.addEventListener('click', (event) => {
      event.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Esconde o menu hambúrguer ao acessar a página de contato
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  }
});

function renderizarCarrinho() {
  const carrinhoItens = document.getElementById('carrinhoItens');
  const carrinhoTotal = document.getElementById('carrinhoTotal');
  carrinhoItens.innerHTML = '';
  let total = 0;

  carrinho.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('carrinho-item');
    itemElement.innerHTML = `
      <span>${item.nome}</span>
      <span>${item.preco}</span>
      <span>Quantidade: ${item.quantidade}</span>
    `;
    carrinhoItens.appendChild(itemElement);

    const precoNumerico = parseFloat(item.preco.replace('R$ ', ''));
    total += precoNumerico * item.quantidade;
  });

  carrinhoTotal.textContent = `R$ ${total.toFixed(2)}`;
}

function addToCart(product, price) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let existingProduct = carrinho.find(item => item.nome === product);

  if (existingProduct) {
    existingProduct.quantidade += 1;
  } else {
    carrinho.push({ nome: product, preco: price, quantidade: 1 });
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  renderizarCarrinho();

  // Redirecionar para a página do carrinho
  window.location.href = 'carrinho.html';
}

window.addEventListener('load', () => {
  // Obter o carrinho do localStorage
  const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho = carrinhoSalvo;

  // Renderizar o carrinho
  renderizarCarrinho();
});

window.addEventListener('load', () => {
  // Obter o carrinho do localStorage
  const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho = carrinhoSalvo;

  // Renderizar o carrinho
  renderizarCarrinho();
});

function openModal(title, image, price, description) {
  const modal = document.getElementById('produtoModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalPrice = document.getElementById('modalPrice');
  const modalDescription = document.getElementById('modalDescription');
  const addToCartButton = document.getElementById('addToCart');

  modalTitle.innerText = title;
  modalImage.src = image;
  modalPrice.innerText = price;
  modalDescription.innerText = description;

  // Atualizar o botão "Adicionar ao Carrinho" com os dados do produto
  addToCartButton.onclick = () => addToCart(title, price);

  modal.style.display = 'block';
}