const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: "coverflow",
});

const reviewSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});



var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function () {
  console.log('клик по кнопке меню');
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
  document.querySelector('body').classList.toggle('hidden');
});
