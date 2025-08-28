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
