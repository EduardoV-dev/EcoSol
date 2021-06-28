const header = document.querySelector('.header');

window.addEventListener('scroll', () =>
  window.pageYOffset >= 60
    ? header.classList.add('scroll')
    : header.classList.remove('scroll')
);