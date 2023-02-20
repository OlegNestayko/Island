// Burger menu
const iconBurger = document.querySelector('.header-burger');
const menu = document.querySelector('.header__list');
const closeMenu = document.querySelector('.close');
iconBurger.addEventListener('click', function (e) {
  menu.classList.toggle('active');
  closeMenu.classList.toggle('active');
});
