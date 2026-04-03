const container = document.getElementById('confetti-container');

function createKiss() {
    const kiss = document.createElement('div');
    kiss.classList.add('kiss');
    kiss.innerText = '💋';

    // Randomize position and timing
    const startLeft = Math.random() * 100; // 0 to 100% of width
    const animationDuration = Math.random() * 3 + 2; // 2 to 5 seconds
    const size = Math.random() * 2 + 1; // 1rem to 3rem

    kiss.style.left = startLeft + 'vw';
    kiss.style.animationDuration = animationDuration + 's';
    kiss.style.fontSize = size + 'rem';
    kiss.style.opacity = Math.random();

    container.appendChild(kiss);

    // Remove the emoji after it finishes falling to keep the page fast
    setTimeout(() => {
        kiss.remove();
    }, animationDuration * 1000);
}

// Generate a new kiss every 50ms
setInterval(createKiss, 50);