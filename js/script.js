const playVideo = document.querySelector('.about__bottom .video-play');
const video = document.querySelector('.about__bottom video');

playVideo.addEventListener('click', () => {
  video.play();
  video.setAttribute('controls', 'controls');
  playVideo.classList.add('video-play--hidden');
});

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 500,
  spaceBetween: 20,
  centeredSlides: true,
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
