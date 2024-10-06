const carrossel = document.querySelector(".carrossel_container-itens");
const setaDireita = document.querySelector(".carrossel_seta--direita");
const setaEsquerda = document.querySelector(".carrossel_seta--esquerda");

function nextCard() {
  if (document.documentElement.clientWidth > 767) {
    carrossel.scrollLeft += carrossel.clientWidth + 32;
  } else if (document.documentElement.clientWidth === 480) {
    carrossel.scrollLeft += carrossel.clientWidth;
  } else {
    carrossel.scrollLeft += carrossel.clientWidth + 16;
  }
}

function previousCard() {
  if (document.documentElement.clientWidth > 767) {
    carrossel.scrollLeft -= carrossel.clientWidth + 32;
  } else if (document.documentElement.clientWidth === 480) {
    carrossel.scrollLeft -= carrossel.clientWidth;
  } else {
    carrossel.scrollLeft -= carrossel.clientWidth + 16;
  }
}

setaDireita.addEventListener("click", nextCard);
setaEsquerda.addEventListener("click", previousCard);
