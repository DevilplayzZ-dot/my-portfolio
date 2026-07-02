// DOM Elements
const getJokeBtn = document.getElementById('getJokeBtn');
const jokeDisplay = document.getElementById('jokeDisplay');
const shareBtn = document.getElementById('shareBtn');
const copyBtn = document.getElementById('copyBtn');
const categorySelect = document.getElementById('categorySelect');
const darkModeToggle = document.getElementById('darkModeToggle');
const safeCheckbox = document.getElementById('safeCheckbox');
const toast = document.getElementById('toast');
const errorMessage = document.getElementById('errorMessage');
const loadingIndicator = document.getElementById('loadingIndicator');
const jokeCount = document.getElementById('jokeCount');
const apiStatus = document.getElementById('apiStatus');
const typeBtns = document.querySelectorAll('.type-btn');

// State
let currentJoke = null;
let jokeCounter = 0;
let selectedType = 'any';
const API_BASE = 'https://v2.jokeapi.dev/joke';

// Initialize
function init() {
    loadDarkMode();
    loadJokeCount();
    attachEventListeners();
    getRandomJoke();
}

// Event Listeners
function attachEventListeners() {
    getJokeBtn.addEventListener('click', getRandomJoke);
    shareBtn.addEventListener('click', shareJoke);
    copyBtn.addEventListener('click', copyJoke);
    darkModeToggle.addEventListener('change', toggleDarkMode);
    categorySelect.addEventListener('change', getRandomJoke);
    safeCheckbox.addEventListener('change', getRandomJoke);

    typeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            typeBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            selectedType = e.target.getAttribute('data-type');
            getRandomJoke();
        });
    });
}

// Get Random Joke
async function getRandomJoke() {
    try {
        showLoading(true);
        hideError();

        // Build API URL
        let url = `${API_BASE}/${getSelectedCategory()}`;
        const params = new URLSearchParams();

        if (selectedType !== 'any') {
            params.append('type', selectedType);
        }

        if (safeCheckbox.checked) {
            params.append('safe-mode');
        }

        if (params.toString()) {
            url += '?' + params.toString();
        }

        // Fetch joke
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.message || 'Failed to fetch joke');
        }

        // Format joke
        currentJoke = formatJoke(data);
        displayJoke(currentJoke);
        updateStats();
        updateApiStatus('Ready');

    } catch (error) {
        showError(error.message || 'Failed to fetch joke. Please try again.');
        updateApiStatus('Error');
        jokeDisplay.innerHTML = `
            <div style="text-align: center; color: #999;">
                <p style="font-size: 2rem; margin-bottom: 0.5rem;">😢</p>
                <p>Oops! Couldn't fetch a joke. Please try again.</p>
            </div>
        `;
    } finally {
        showLoading(false);
    }
}

// Format Joke
function formatJoke(data) {
    if (data.type === 'single') {
        return {
            text: data.joke,
            type: 'single',
            category: data.category
        };
    } else if (data.type === 'twopart') {
        return {
            text: `${data.setup}\n\n${data.delivery}`,
            setup: data.setup,
            delivery: data.delivery,
            type: 'twopart',
            category: data.category
        };
    }
}

// Display Joke
function displayJoke(joke) {
    jokeDisplay.innerHTML = `
        <div style="width: 100%; text-align: center;">
            ${joke.type === 'twopart' ? `
                <p style="margin-bottom: 1.5rem; font-size: 1.15rem;">${escapeHtml(joke.setup)}</p>
                <p style="color: var(--secondary-color); font-weight: 700;">${escapeHtml(joke.delivery)}</p>
            ` : `
                <p>${escapeHtml(joke.text)}</p>
            `}
            <p style="margin-top: 1rem; font-size: 0.85rem; color: #999; text-transform: uppercase;">
                ${joke.category}
            </p>
        </div>
    `;

    // Enable share and copy buttons
    shareBtn.disabled = false;
    copyBtn.disabled = false;
}

// Get Selected Category
function getSelectedCategory() {
    const category = categorySelect.value;
    return category === 'any' ? 'Any' : category.charAt(0).toUpperCase() + category.slice(1);
}

// Share Joke
async function shareJoke() {
    if (!currentJoke) return;

    const text = currentJoke.type === 'twopart'
        ? `${currentJoke.setup}\n\n${currentJoke.delivery}`
        : currentJoke.text;

    if (navigator.share) {
        try {
            await navigator.share({
                title: '😄 Joke Generator',
                text: text,
                url: window.location.href
            });
            showToast('Joke shared!', 'success');
        } catch (error) {
            if (error.name !== 'AbortError') {
                showToast('Error sharing joke', 'error');
            }
        }
    } else {
        // Fallback: Copy to clipboard
        copyToClipboard(text);
        showToast('Joke copied to clipboard!', 'success');
    }
}

// Copy Joke
function copyJoke() {
    if (!currentJoke) return;

    const text = currentJoke.type === 'twopart'
        ? `${currentJoke.setup}\n\n${currentJoke.delivery}`
        : currentJoke.text;

    copyToClipboard(text);
    showToast('Joke copied to clipboard!', 'success');
}

// Copy to Clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).catch(err => {
        console.error('Failed to copy:', err);
        showToast('Failed to copy', 'error');
    });
}

// Show Loading
function showLoading(show) {
    if (show) {
        loadingIndicator.classList.add('show');
        getJokeBtn.disabled = true;
    } else {
        loadingIndicator.classList.remove('show');
        getJokeBtn.disabled = false;
    }
}

// Show Error
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
}

// Hide Error
function hideError() {
    errorMessage.classList.remove('show');
}

// Show Toast
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load Dark Mode
function loadDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
}

// Update Stats
function updateStats() {
    jokeCounter++;
    localStorage.setItem('jokeCount', jokeCounter);
    jokeCount.textContent = jokeCounter;
}

// Load Joke Count
function loadJokeCount() {
    const saved = localStorage.getItem('jokeCount');
    if (saved) {
        jokeCounter = parseInt(saved);
        jokeCount.textContent = jokeCounter;
    }
}

// Update API Status
function updateApiStatus(status) {
    apiStatus.textContent = status;
    apiStatus.style.color = status === 'Ready' ? '#2ecc71' : '#e74c3c';
}

// Utility: Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);