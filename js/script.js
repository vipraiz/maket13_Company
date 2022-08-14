const playVideo = document.querySelector('.about__bottom .video-play');
const video = document.querySelector('.about__bottom video');

playVideo.addEventListener('click', () => {
  video.play();
  video.setAttribute('controls', 'controls');
  playVideo.classList.add('video-play--hidden');
});
