const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;
        const activeContent = document.querySelector('.tab-content.active');
        const newContent = document.getElementById(tabId);

        if (activeContent === newContent) return;

        // Update active button
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Fade out current
        if (activeContent) {
            activeContent.classList.remove('active');
        }

        // Fade in new
        newContent.classList.add('active');
    });
});

//Policy //Hours
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.accordion-header');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const isOpen = content.classList.contains('open');

      // Close all others softly
      document.querySelectorAll('.accordion-content').forEach(c => {
        if (c !== content && c.classList.contains('open')) {
          c.style.maxHeight = c.scrollHeight + 'px'; // current height
          c.offsetHeight; // force repaint
          c.style.maxHeight = '0';
          c.classList.remove('open');
          c.addEventListener('transitionend', function handler() {
            c.setAttribute('hidden', '');
            c.removeEventListener('transitionend', handler);
          });
        }
      });

      document.querySelectorAll('.accordion-header').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        // Open clicked one
        content.classList.add('open');
        content.removeAttribute('hidden');
        button.setAttribute('aria-expanded', 'true');

        content.style.maxHeight = content.scrollHeight + 'px';

        content.addEventListener('transitionend', function handler() {
          if (content.classList.contains('open')) {
            content.style.maxHeight = 'none'; // allow flexible height
          }
          content.removeEventListener('transitionend', handler);
        });
      } else {
        // Soft close for clicked one
        content.style.maxHeight = content.scrollHeight + 'px'; // current height
        content.offsetHeight; // force repaint
        content.style.maxHeight = '0';
        content.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        content.addEventListener('transitionend', function handler() {
          content.setAttribute('hidden', '');
          content.removeEventListener('transitionend', handler);
        });
      }
    });
  });
});

