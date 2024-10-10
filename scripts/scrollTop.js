const scrollTop = document.querySelector(".btn--carrossel");

function aboutScrolling() {
  window.scrollBy({
    top: -window.innerHeight - 110,
    behavior: "smooth",
  });
}

scrollTop.addEventListener("click", aboutScrolling);
