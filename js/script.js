const buttons = document.querySelectorAll("#button-celector li button");

buttons.forEach(function(botao) {
    botao.addEventListener("click", function() {
      // Remove a classe "escuro" de todos os li
      document.querySelectorAll("#nav-ul li").forEach(function(li) {
        li.classList.remove("selected");
      });
      // Adiciona a classe "escuro" apenas ao li pai do botão clicado
      this.parentNode.parentNode.classList.add("selected");
    });
  });






