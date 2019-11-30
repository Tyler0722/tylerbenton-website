const button = document.querySelector(".js-hamburger");
const menu = document.querySelector(".js-menu");
button.addEventListener("click", function(event) {
  button.classList.toggle("open");
  menu.classList.toggle("open");
});
