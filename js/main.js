"use strict";

// START HEADER SCROLL
// ===================
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
}); // END HEADER SCROLL
// =================
// START MODAL WINDOWS
// ===================

var navLogin = document.querySelectorAll('.login');
var forgotPassword = document.querySelector('.change-password');
var registrationButton = document.querySelector('.change-registration a');
var navExit = document.querySelector('.nav__link--exit');
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
}); // END MODAL WINDOWS
// =================
// START AOS
// =========

AOS.init(); // End AOS
// =======
// START HEADER TOOLTIP
// ====================

var tooltipBtn1 = document.querySelector('.tooltip-btn-1');
var tooltipContent1 = document.querySelector('.tooltip-content-1');

if (tooltipBtn1 != undefined && tooltipBtn1 != null && window.innerWidth <= 460) {
  tooltipBtn1.addEventListener('click', function () {
    tooltipContent1.classList.toggle('active');
  });
  document.addEventListener('click', function (e) {
    var target = e.target;
    var its_menu = target == tooltipContent1 || tooltipContent1.contains(target);
    var its_btnMenu = target == tooltipBtn1 || tooltipBtn1.contains(target);
    var menu_is_active = tooltipContent1.classList.contains('active');

    if (!its_menu && !its_btnMenu && menu_is_active) {
      tooltipContent1.classList.remove('active');
    }
  });
} // END HEADER TOOLTIP
// ====================