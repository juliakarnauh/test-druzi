const links = document.querySelectorAll('.header_item_nav a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    links.forEach(link => {
      link.classList.remove('current');
    });
    link.classList.add('current');
    
    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});