// Admin authentication
const ADMIN_PASSWORD = 'kingak4832@';

const loginForm = document.getElementById('loginForm');
const adminPanel = document.getElementById('adminPanel');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');

// Check if user is already logged in
if (sessionStorage.getItem('adminLoggedIn')) {
    showAdminPanel();
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.getElementById('password').value;

        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem('adminLoggedIn', 'true');
            loginError.classList.remove('show');
            showAdminPanel();
        } else {
            loginError.textContent = 'Invalid password';
            loginError.classList.add('show');
            document.getElementById('password').value = '';
        }
    });
}

function showAdminPanel() {
    document.querySelector('.admin-login-container').style.display = 'none';
    adminPanel.style.display = 'flex';
    initializeAdminPanel();
}

function hideAdminPanel() {
    document.querySelector('.admin-login-container').style.display = 'flex';
    adminPanel.style.display = 'none';
    sessionStorage.removeItem('adminLoggedIn');
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', hideAdminPanel);
}

// Sidebar navigation
const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.admin-section');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all items and sections
        menuItems.forEach(m => m.classList.remove('active'));
        sections.forEach(s => s.style.display = 'none');
        
        // Add active class to clicked item
        item.classList.add('active');
        
        // Show corresponding section
        const sectionId = item.getAttribute('data-section');
        document.getElementById(sectionId).style.display = 'block';
    });
});

function initializeAdminPanel() {
    // Set default dashboard as active
    const dashboardSection = document.getElementById('dashboard');
    if (dashboardSection) {
        dashboardSection.style.display = 'block';
    }
}

// Prevent back button after logout
window.addEventListener('pageshow', (e) => {
    if (!sessionStorage.getItem('adminLoggedIn')) {
        document.querySelector('.admin-login-container').style.display = 'flex';
        adminPanel.style.display = 'none';
    }
});