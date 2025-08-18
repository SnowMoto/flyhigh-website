const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');

burger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('active');

  if (isOpen) {
    burger.innerHTML = '&times;';
    burger.setAttribute('aria-label', 'Close menu');
    burger.setAttribute('aria-expanded', 'true');
    burger.classList.add('close');
  } else {
    burger.innerHTML = '&#9776;';
    burger.setAttribute('aria-label', 'Open menu');
    burger.setAttribute('aria-expanded', 'false');
    burger.classList.remove('close');
  }
});
