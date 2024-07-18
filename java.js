
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const fadeInElements = document.querySelectorAll('.destination');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
        form.reset();
    });

    const handleScroll = () => {
        fadeInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});
