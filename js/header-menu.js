const header__menubtn = document.querySelector(".header__menu-btn");
const burger__menu = document.querySelector(".sidebar-menu-body");
const button__close = document.querySelector(".sidebar-menu-btn");
const background = document.querySelector(".sidebar-menu--background");
let body = document.querySelector(".body");
const closeSidebar = function () {
  burger__menu.classList.add("sidebar-menu-body--hidden");
  body.classList.remove("blocked");
  background.classList.remove("visible");
  setTimeout(background.addEventListener("click",function(){
    closeSidebar();
  }), 800);
};

header__menubtn.addEventListener("click", function () {
  burger__menu.classList.remove("sidebar-menu-body--hidden");
  body.classList.add("blocked");
  background.classList.add("visible");
});

button__close.addEventListener("click", function () {
  closeSidebar();
});

