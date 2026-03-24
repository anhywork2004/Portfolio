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
const stats = document.querySelectorAll('.stat-number');

const animateStats = () => {
    stats.forEach(stat => {
        let text = stat.innerText;
        
        if(text.includes('3')) {
            let count = 0;
            let interval = setInterval(() => {
                count++;
                stat.innerText = count + "+";
                if(count >= 3) clearInterval(interval);
            }, 200);
        }

        if(text.includes('70M')) {
            let count = 0;
            let interval = setInterval(() => {
                count += 10;
                stat.innerText = count + "M+";
                if(count >= 70) clearInterval(interval);
            }, 50);
        }
    });
};

window.addEventListener('load', animateStats);