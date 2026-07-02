// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
} else {
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    });
}

// Listen to system theme preference changes
prefersDark.addEventListener('change', (e) => {
    if (e.matches) {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});