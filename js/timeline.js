// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');

if (timelineItems.length > 0) {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in-up');
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item);
    });
}