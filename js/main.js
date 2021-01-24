"use strict";

// Burger menu
var nav = document.querySelector('.header__nav');
var burger = document.querySelector('.burger');

var toggleNavMenu = function toggleNavMenu() {
  nav.classList.toggle('header__nav--active');
  burger.classList.toggle('burger--active');
};

var removeNavMenu = function removeNavMenu() {
  nav.classList.remove('header__nav--active');
  burger.classList.remove('burger--active');
};

burger.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleNavMenu();
});
document.addEventListener('click', function (e) {
  var target = e.target;
  var its_menu = target == nav || nav.contains(target);
  var its_btnMenu = target == burger;
  var menu_is_active = nav.classList.contains('header__nav--active');

  if (!its_menu && !its_btnMenu && menu_is_active) {
    removeNavMenu();
  }
}); // End burger menu
// Scroll

var header = document.querySelector('.header');
var lastScrollTop = 0;
document.addEventListener('scroll', function () {
  // Remove mobile header when scrolling
  nav.classList.remove('header__nav--active');
  burger.classList.remove('burger--active');
  var scrollSize = window.pageYOffset;

  if (lastScrollTop > scrollSize) {
    header.classList.remove('header--bottom');
    header.classList.add('header--top');
  } else if (lastScrollTop < scrollSize) {
    header.classList.remove('header--top');
    header.classList.add('header--bottom');
  }

  lastScrollTop = scrollSize;
  window.pageYOffset > 1 ? header.classList.add('header--scroll') : header.classList.remove('header--scroll');
}); // End Scroll