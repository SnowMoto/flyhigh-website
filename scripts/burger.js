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

document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-header");

  accordions.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      // Toggle open/close
      content.classList.toggle("open");

      if (content.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
        header.setAttribute("aria-expanded", "true");
      } else {
        content.style.maxHeight = null;
        header.setAttribute("aria-expanded", "false");
      }
    });
  });
});