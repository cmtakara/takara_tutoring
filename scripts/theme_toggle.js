const toggleButton = document.getElementById('theme-toggle');
const iconSpan = document.getElementById('theme-icon');

function updateIcon(isLight) {
  iconSpan.textContent = isLight ? '☀️' : '🌙';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  updateIcon(isLight);
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const isLight = savedTheme === 'light';
  if (isLight) {
    document.body.classList.add('light-mode');
  }
  updateIcon(isLight);
});
