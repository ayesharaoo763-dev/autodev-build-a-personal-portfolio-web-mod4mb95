// Smooth scroll navigation
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animate hero section
const hero = document.querySelector('#hero h1');

hero.addEventListener('animationend', () => {
    hero.style.animation = 'none';
});

// Add event listener to contact form
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('Form submitted!');
});
