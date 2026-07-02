// Particle animation for hero section
const particlesContainer = document.getElementById('particles');

if (particlesContainer) {
    function createParticles() {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.width = Math.random() * 4 + 'px';
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
            particle.style.borderRadius = '50%';
            particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 2 + 's';
            particlesContainer.appendChild(particle);
        }
    }
    createParticles();
}