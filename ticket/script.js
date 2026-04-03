document.querySelectorAll('.ticket').forEach(ticket => {
    ticket.addEventListener('click', () => {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
        
        // Auto-hide after 1 second
        setTimeout(() => {
            popup.style.display = 'none';
        }, 1000);
    });
});