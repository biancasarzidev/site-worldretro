document.addEventListener('DOMContentLoaded', () => {
  // Seletores
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');
  const banners = document.querySelectorAll('.banner');
  const arrowLeft = document.querySelector('.arrow.left');
  const arrowRight = document.querySelector('.arrow.right');
  const linkProdutos = document.querySelector('a[href="#produtos"]');
  const voltarInicio = document.getElementById('voltarInicio');
  const homeLink = document.querySelector('a[href="#home"]');
  const logo = document.querySelector('.logo');
  const contactLink = document.querySelector('a[href="#contact"]');
  const contactSection = document.getElementById('contact');
  
  let currentBanner = 0;
  const totalBanners = banners.length;

  // Função para alternar o menu responsivo
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Função para exibir o banner atual
  const showBanner = (index) => {
    banners.forEach((banner) => banner.classList.remove('active'));
    banners[index].classList.add('active');
  };

  // Navegação pelos banners
  if (arrowLeft) {
    arrowLeft.addEventListener('click', () => {
      currentBanner = (currentBanner === 0) ? totalBanners - 1 : currentBanner - 1;
      showBanner(currentBanner);
    });
  }

  if (arrowRight) {
    arrowRight.addEventListener('click', () => {
      currentBanner = (currentBanner === totalBanners - 1) ? 0 : currentBanner + 1;
      showBanner(currentBanner);
    });
  }

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

  // Função para scroll suave para a seção "home"
  if (homeLink) {
    homeLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  }

  // Funcionalidade para logo voltar ao menu principal
  if (logo) {
    logo.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  }

  // Scroll suave para a seção "Contato"
  if (contactLink) {
    contactLink.addEventListener('click', (event) => {
      event.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth' });
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  }

  // Interação do botão de cadastro com a tela de login
  const btnCadastro = document.getElementById('btnCadastro');
  if (btnCadastro) {
    btnCadastro.addEventListener('click', function (event) {
      event.preventDefault(); 
      const loginSection = document.getElementById('login');
      if (loginSection.style.display === 'block') {
        loginSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        loginSection.style.display = 'block'; 
        loginSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

// Frete
function calcularFrete() {
  const cep = document.getElementById('cep').value;
  const freteResultado = document.getElementById('freteResultado');
  if (!/^\d{5}-?\d{3}$/.test(cep)) {
    freteResultado.textContent = "Por favor, insira um CEP válido.";
    return;
  }
  const valorFrete = (Math.random() * 10 + 5).toFixed(2);
  freteResultado.textContent = `Frete estimado: R$ ${valorFrete}`;
}

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    if (email === 'usuario@exemplo.com' && senha === '123456') {
      alert('Login bem-sucedido!');
      window.location.href = 'pagina-principal.html';
    } else {
      alert('Email ou senha incorretos.');
    }
  });
}

// Carrinho
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function renderizarCarrinho() {
  const carrinhoItens = document.getElementById('carrinhoItens');
  const carrinhoTotal = document.getElementById('carrinhoTotal');
  carrinhoItens.innerHTML = '';
  let total = 0;
  carrinho.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('carrinho-item');
    itemElement.innerHTML = `
      <div class="item-imagem">
        <img src="${item.imagem}" alt="${item.nome}">
      </div>
      <div class="item-info">
        <span>${item.nome}</span>
        <span>${item.preco}</span>
        <span>Quantidade: ${item.quantidade}</span>
        <button onclick="removerDoCarrinho('${item.nome}')">Remover</button>
      </div>
    `;
    carrinhoItens.appendChild(itemElement);

    const precoNumerico = parseFloat(item.preco.replace('R$ ', ''));
    total += precoNumerico * item.quantidade;
  });
  carrinhoTotal.textContent = total.toFixed(2);
}

function addToCart(product, price, image) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let existingProduct = carrinho.find(item => item.nome === product);
  if (existingProduct) {
    existingProduct.quantidade += 1;
  } else {
    carrinho.push({ nome: product, preco: price, imagem: image, quantidade: 1 });
  }
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  renderizarCarrinho();
  exibirCarrinho();
}

function exibirCarrinho() {
  const carrinhoSection = document.querySelector('.carrinho');
  const continuarComprandoBtn = document.createElement('button');
  continuarComprandoBtn.textContent = 'Continuar Comprando';
  continuarComprandoBtn.addEventListener('click', () => {
    carrinhoSection.style.display = 'none';
  });

  carrinhoSection.style.display = 'block';
  carrinhoSection.appendChild(continuarComprandoBtn);
}

// Remover produto do carrinho
function removerDoCarrinho(product) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho = carrinho.filter(item => item.nome !== product);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  renderizarCarrinho();
}

// Modal

let modalElement; // Adicione esta linha no início do seu código

document.addEventListener('DOMContentLoaded', () => {
  // ...
  // Seletores
  // ...

  modalElement = document.getElementById('produtoModal'); // Adicione esta linha após os seletores

  // ...
});

function openModal(title, image, price, description) {
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalPrice = document.getElementById('modalPrice');
  const modalDescription = document.getElementById('modalDescription');
  const addToCartButton = document.getElementById('addToCartButton');

  modalTitle.innerText = title;
  modalImage.src = image;
  modalPrice.innerText = price;
  modalDescription.innerText = description;

  addToCartButton.onclick = () => {
    addToCart(title, price, image);
    fecharModal(); // Chamar a função fecharModal()
    exibirCarrinho();
  };

  if (modalElement) {
    modalElement.style.display = 'block';
  }
}

function fecharModal() {
  if (modalElement) {
    modalElement.style.display = 'none';
  }
}

// Fechar a modal
const closeModalButton = document.getElementById('closeModal');
if (closeModalButton) {
  closeModalButton.addEventListener('click', fecharModal);
}

const closeModalButtonX = document.getElementById('closeModalX');

if (closeModalButtonX) {
  closeModalButtonX.addEventListener('click', fecharModal);
}

// Fechar a modal ao clicar fora dela
window.addEventListener('click', (event) => {
  if (modalElement && event.target === modalElement) {
    modalElement.style.display = 'none';
  }
});

// Quantidade de produtos.
document.addEventListener("DOMContentLoaded", function () {
  function atualizarQuantidadeProdutos() {
    const listaProdutos = document.querySelector(".produtos-lista");
    const totalProdutos = listaProdutos.children.length; // Conta os produtos
    document.getElementById("quantidade-produtos").textContent = totalProdutos;
  }

  // Chame a função quando a página carregar
  atualizarQuantidadeProdutos();

  // Se os produtos forem carregados dinamicamente, observe mudanças na lista
  const observer = new MutationObserver(atualizarQuantidadeProdutos);
  observer.observe(document.querySelector(".produtos-lista"), { childList: true });
});
