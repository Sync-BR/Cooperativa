// Aguarda o carregamento completo da página
window.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links do menu de navegação
    const linksNav = document.querySelectorAll('nav a');
  
    // Adiciona um evento de clique a cada link
    linksNav.forEach(link => {
      link.addEventListener('click', function(e) {
        // Previne o comportamento padrão do clique
        e.preventDefault();
  
        // Obtém o ID do elemento de destino a partir do atributo href
        const targetId = this.getAttribute('href');
  
        // Obtém a posição do elemento de destino
        const targetPosition = document.querySelector(targetId).offsetTop;
  
        // Realiza a rolagem suave até o elemento de destino
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  });
  