
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navMenu = document.querySelector('.navMenu');

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
})

// sticky navMenu
window.addEventListener("scroll", () => {
  navMenu.classList.toggle("sticky", window.scrollY > 0)
})

