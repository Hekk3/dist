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
// modal window

var navLogin = document.querySelectorAll('.login');
var forgotPassword = document.querySelector('.change-password');
var registrationButton = document.querySelector('.change-registration a');
var allModal = document.querySelectorAll('.modal-window');
var modals = document.querySelector('.modals');
var insideModals = document.querySelector('.modals__container');
var modal1 = document.querySelector('.modal-window-1');
var modal2 = document.querySelector('.modal-window-2');
var modal3 = document.querySelector('.modal-window-3');
var modal4 = document.querySelector('.modal-window-4');
var modal5 = document.querySelector('.modal-window-5');

function modalCall(modal) {
  for (var index = 0; index < allModal.length; index++) {
    allModal[index].classList.remove('active');
  }

  modal.classList.add('active');
  modals.classList.add('active');
  insideModals.style.width = modal.clientWidth + "px";
  insideModals.style.height = modal.clientHeight + "px";
  document.querySelector('body').classList.add('body-modal');
}

for (var i = 0; i < navLogin.length; i++) {
  navLogin[i].addEventListener('click', function (e) {
    event.preventDefault();
    modalCall(modal1);
  });
}

forgotPassword.addEventListener('click', function () {
  modalCall(modal2);
});
registrationButton.addEventListener('click', function (e) {
  event.preventDefault();
  modalCall(modal3);
});
document.addEventListener('click', function (e) {
  var target = e.target;
  var its_menu = target == insideModals || insideModals.contains(target);
  var its_btnMenu = target == navLogin[0];

  if (!its_menu && !its_btnMenu) {
    for (var index = 0; index < allModal.length; index++) {
      allModal[index].classList.remove('active');
    }

    modals.classList.remove('active');
    document.querySelector('body').classList.remove('body-modal');
  }
}); // AOS

AOS.init();