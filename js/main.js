$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    keyboard: {
    enabled: true,
    onlyInViewport: false,
    
  },
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  loop: true,
});


var reviewsSlider = new Swiper('.reviews-slider', {
   loop: true,
   
     // Navigation arrows
     navigation: {
       nextEl: '.reviews-slider__button--next',
       prevEl: '.reviews-slider__button--prev',
     },
});


var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке меню");
    document
       .querySelector(".navbar-bottom")
       .classList.toggle("navbar-bottom_visible");
    document
       .querySelector(".body")
       .classList.toggle("body-scroll-off");   
   });
   
var modalButton = $("[data-togle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal() {
  var targetModal = $(this).attr("data-href");
  $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
  $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
}

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}

});