// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('nav');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};
// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', { passive: true }, () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});
// SwiperJs
var swiper = new Swiper('.mySwiperLandscape', {
  loop: true,
  autoplay: true,
  grabCursor: true,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});
// SwiperJs
var swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: true,
  grabCursor: true,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
//Swiper Video
var swiper = new Swiper('#editing-swiper', {
  // loop : true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
