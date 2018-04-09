//-------open/show top-menu
var btn = document.getElementById('btn');
var menu = document.querySelector('.header__menu');
btn.addEventListener('click', showHide);
function showHide() {
  menu.classList.toggle('header_menu_active');
}


