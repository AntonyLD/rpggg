const buttons = document.querySelectorAll("#button-celector li button");

const imgChange = document.querySelectorAll(".contianer-jutsus div img");

const rankBacground = document.querySelectorAll(".contianer-jutsus .rank")


const btnLight = document.querySelectorAll(".light")




const urlArchive = document.doctype.baseURI
const splitUrl = urlArchive.split("/")
const nameHtml = splitUrl[splitUrl.length - 1]

if (nameHtml === "index.html") {
  btnLight.forEach((posi) =>{
    if(posi.id == "fogo"){
      posi = posi.style.filter = "brightness(1.4)"
    }
    
  });
} else if (nameHtml === "agua.html") {
  rankBacground.forEach((p) => {
    p.style.backgroundColor = "#0c8cff"
  });

  btnLight.forEach((posi) =>{
    if(posi.id == "agua"){
      posi = posi.style.filter = "brightness(1.4)"
    }
    
  });
  
} else if (nameHtml === "vento.html") {
  rankBacground.forEach((p) => {
    p.style.backgroundColor = "#00c07a"
  });

  btnLight.forEach((posi) =>{
    if(posi.id == "vento"){
      posi = posi.style.filter = "brightness(1.4)"
    }
    
  });

} else if (nameHtml === "terra.html") {
  rankBacground.forEach((p) => {
    p.style.backgroundColor = "#87550c"
  });

  btnLight.forEach((posi) =>{
    if(posi.id == "terra"){
      posi = posi.style.filter = "brightness(1.4)"
    }
    
  });
} else if (nameHtml === "raio.html") {
  rankBacground.forEach((p) => {
    p.style.backgroundColor = "#ddd000"
  });

  btnLight.forEach((posi) =>{
    if(posi.id == "raio"){
      posi = posi.style.filter = "brightness(1.4)"
    }
    
  });
}


window.onload = function () {
  Gifffer();
}









