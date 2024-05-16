const buttons = document.querySelectorAll("#button-celector li button");

const imgChange = document.querySelectorAll(".contianer-jutsus div img");

const urlArchive = document.doctype.baseURI
const splitUrl = urlArchive.split("/")
const nameHtml = splitUrl[splitUrl.length -1]
console.log(nameHtml)

if(nameHtml === "index.html#"){
  console.log("alo")
}




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


  






