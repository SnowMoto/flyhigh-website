const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');

if (burger && mobileNav) {
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
}


document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-header");

  accordions.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const isOpen = content.classList.contains("open");

      // Close all other accordion contents
      document.querySelectorAll(".accordion-content.open").forEach(openContent => {
        openContent.classList.remove("open");
        openContent.style.maxHeight = null;
        openContent.previousElementSibling.setAttribute("aria-expanded", "false");
      });

      // If the clicked one wasn’t open, open it
      if (!isOpen) {
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
        header.setAttribute("aria-expanded", "true");
      }
    });
  });
});

