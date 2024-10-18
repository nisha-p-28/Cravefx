// preloader start
var loader = document.getElementById('preloader')
window.addEventListener('load', () => {
  setTimeout('l()',1000)
})
function l() {
  loader.style.display = "none"
}
// preloader end 

//navbar start
const nav1 = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    nav1.classList.add('scroll-down')
  }
  else if (window.scrollY <= 100) {
    nav1.classList.remove('scroll-down')
  }
})
//navbar end
AOS.init();


// swiper start
new Swiper('.slider-wrapper', {

  loop: true,
  gapCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBultets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 2
    },
    576: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 6
    }

  }

});
// swiper end