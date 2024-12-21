// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
  document.body.style.backgroundColor = isDarkMode ? '#fff' : '#333';
  document.body.style.color = isDarkMode ? '#333' : '#fff';
  themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
  isDarkMode = !isDarkMode;
});
