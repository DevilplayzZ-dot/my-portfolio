// Gallery lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const galleryItems = document.querySelectorAll('.gallery-item');

if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.style.display = 'block';
            const emoji = item.querySelector('.gallery-image').textContent;
            const title = item.querySelector('h3').textContent;
            lightboxImg.textContent = emoji;
            lightboxImg.style.fontSize = '8rem';
            lightboxImg.style.textAlign = 'center';
            caption.textContent = title;
        });
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}