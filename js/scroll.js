const screens = document.querySelectorAll('.screen');
let currentScreenIndex = 0;

window.addEventListener('scroll', () => {
  const currentScreen = screens[currentScreenIndex];
  const currentScreenHeight = currentScreen.offsetHeight;
  const scrollPosition = window.pageYOffset;

  if (scrollPosition >= currentScreen.offsetTop + currentScreenHeight) {
    currentScreenIndex++;
    if (currentScreenIndex < screens.length) {
      screens[currentScreenIndex].scrollIntoView({ behavior: 'smooth' });
    }
  }
});