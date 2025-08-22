const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

// Set default tab on load
document.addEventListener('DOMContentLoaded', () => {
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

    if (activeContent === newContent) return;

    // Update tab buttons
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Fade out current content
    activeContent.classList.remove('visible');
    activeContent.classList.add('fading-out');

    // After fade-out ends, switch content
    setTimeout(() => {
      activeContent.classList.remove('active', 'fading-out');
      newContent.classList.add('active', 'visible');
    }, 500); // Match your CSS transition duration
  });
});
