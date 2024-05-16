const buttons = document.querySelectorAll("#button-celector li button");

const imgChange = document.querySelectorAll(".contianer-jutsus div img");

buttons.forEach((botao) => {
    botao.addEventListener("click", function()  {
      document.querySelectorAll("#nav-ul li").forEach(function(li) {
        li.classList.remove("selected");
      });
      this.parentNode.parentNode.classList.add("selected");
    });
  });

  window.onload = function() {
    Gifffer();
  }


  






