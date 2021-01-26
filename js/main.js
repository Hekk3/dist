"use strict";

// Scroll
var header = document.querySelector('.header');
var lastScrollTop = 0;
document.addEventListener('scroll', function () {
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