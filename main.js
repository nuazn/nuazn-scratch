let burger = document.querySelector('.burger');
let navbar = document.querySelector('.site-navbar');
let closenav = document.querySelector('.menu-close');
burger.onclick = function(){navbar.classList.toggle("navbar-active")};
closenav.onclick = function(){navbar.classList.toggle("navbar-active")};
