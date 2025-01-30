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

//seta dos produtos
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

document.addEventListener('DOMContentLoaded'), () => {
  // Seletores
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');
  const homeLink = document.querySelector('a[href="#home"]');
  const logo = document.querySelector('.logo');
  const contactLink = document.querySelector('a[href="#contact"]');
  const contactSection = document.getElementById('contact');

}
  
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

// Selecionando os elementos do modal
const modal = document.getElementById("produtoModal");
const closeModal = document.querySelector(".close");
const addToCartButton = document.getElementById("addToCart");
const calcularFreteButton = document.getElementById("calcularFrete");
const freteResultado = document.getElementById("freteResultado");

// Função para abrir o modal com informações do produto
function openModal(produto) {
  const { name, price, description, image, videos } = produto;

  // Definir os valores dinâmicos no modal
  document.getElementById("modalTitle").textContent = name;
  document.getElementById("modalPrice").textContent = price;
  document.getElementById("modalDescription").textContent = description;
  document.getElementById("modalImage").src = image;
  document.getElementById("modalImage").alt = name;

  // Adiciona vídeos ao modal
  const videosContainer = document.getElementById("modalVideos");
  videosContainer.innerHTML = '';  // Limpar vídeos existentes
  videos.forEach(video => {
    const videoElement = document.createElement("iframe");
    videoElement.src = video;
    videoElement.width = "300";
    videoElement.height = "200";
    videoElement.frameBorder = "0";
    videosContainer.appendChild(videoElement);
  });

  modal.style.display = "block";
}

// Função para fechar o modal
closeModal.onclick = function() {
  modal.style.display = "none";
}

// Fechar o modal se o usuário clicar fora da janela
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Calcular o frete (simulação)
calcularFreteButton.onclick = function() {
  const cep = document.getElementById("cep").value;
  if (cep.length === 8) {
    freteResultado.textContent = "Frete calculado: R$ 20,00";  // Simulação de valor de frete
  } else {
    freteResultado.textContent = "Por favor, insira um CEP válido.";
  }
}

// Adicionar ao carrinho (simulação)
addToCartButton.onclick = function() {
  alert("Produto adicionado ao carrinho!");
}

// Simulação de dados do produto
const produtoExemplo = {
  name: "Alien Trilogy",
  price: "55,00",
  description: "Jogo clássico de tiro e aventura.",
  image: "imagens/alien.png",
  videos: [
    "https://www.youtube.com/embed/VIDEO_ID_1",  // Substitua com os IDs de vídeo reais
    "https://www.youtube.com/embed/VIDEO_ID_2"
  ]
};

// Exemplo de clique no produto para abrir o modal
const produtoCard = document.querySelectorAll(".produto-card");
produtoCard.forEach(card => {
  card.addEventListener("click", function() {
    openModal(produtoExemplo);
  });
});




