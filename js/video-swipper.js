const videoSliderItems = document.querySelectorAll('.video-slider-item');

videoSliderItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    videoSliderItems.forEach((item) => {
      item.classList.remove('active');
    });
    item.classList.add('active');
  });
});