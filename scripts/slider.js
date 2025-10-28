const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

// Set default tab on load
document.addEventListener('DOMContentLoaded', () => {
  if (!tabs.length || !contents.length) return;

  const defaultTab = tabs[0];
  const defaultContent = document.getElementById(defaultTab.dataset.tab);

  tabs.forEach(t => t.classList.remove('active'));
  contents.forEach(c => c.classList.remove('active', 'visible'));

  defaultTab.classList.add('active');
  defaultContent.classList.add('active', 'visible');
});

// Tab click logic
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;
    const newContent = document.getElementById(tabId);
    const activeContent = document.querySelector('.tab-content.visible');

    if (!newContent || activeContent === newContent) return;

    // Update tab buttons
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Instantly switch content (no fade-out)
    contents.forEach(c => c.classList.remove('active', 'visible'));
    newContent.classList.add('active', 'visible');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const dd = document.querySelector('[data-dropdown]');
  const btn = document.getElementById('location-button');
  const list = document.getElementById('location-list');

  if (!dd || !btn || !list) return;

  const close = () => {
    list.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const willOpen = list.hidden;
    list.hidden = !willOpen;
    btn.setAttribute('aria-expanded', String(willOpen));
  });

  list.addEventListener('click', (e) => {
    const item = e.target.closest('li[data-value]');
    if (!item) return;
    btn.textContent = item.textContent;
    close();
    window.location.href = item.dataset.value;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const marqueeTrack = document.querySelector('.marquee-track');
  const featureCards = document.querySelectorAll('.feature-card');

  if (!marqueeTrack || !featureCards.length) return;

  featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      marqueeTrack.classList.add('pause-marquee');
    });

    card.addEventListener('mouseleave', () => {
      marqueeTrack.classList.remove('pause-marquee');
    });
  });
});


const radios = document.querySelectorAll('.slider-features input[type="radio"]');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
let current = 0;

// Helper to update selected radio
function updatePosition() {
  radios[current].checked = true;
}

// Arrow click events
rightArrow.addEventListener('click', () => {
  current = (current + 1) % radios.length;
  updatePosition();
});

leftArrow.addEventListener('click', () => {
  current = (current - 1 + radios.length) % radios.length;
  updatePosition();
});

// Swipe gestures for mobile
let startX = 0;
const carousel = document.querySelector('.carousel');
carousel.addEventListener('touchstart', e => startX = e.touches[0].clientX);
carousel.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    current = (current + 1) % radios.length;
    updatePosition();
  } else if (endX - startX > 50) {
    current = (current - 1 + radios.length) % radios.length;
    updatePosition();
  }
});