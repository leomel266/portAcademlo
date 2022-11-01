const iconMenu = document.querySelector(".menu__icon");
const menu = document.querySelector(".navUl");

iconMenu.addEventListener("click", function () {
  menu.classList.toggle("navUl__show");
});
