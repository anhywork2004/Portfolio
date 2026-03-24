// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Animate skill bar
const progresses = document.querySelectorAll('.progress');

progresses.forEach((progress) => {
    const width = progress.getAttribute('data-width');
    progress.style.setProperty('--width', width);
});