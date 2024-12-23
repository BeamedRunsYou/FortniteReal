document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');

    // Example news data
    const newsItems = [
        { title: 'New Season Released!', content: 'The new season of Fortnite is now live with exciting new features and skins.' },
        { title: 'Patch Notes', content: 'Check out the latest patch notes for updates and bug fixes.' },
        { title: 'Fortnite Championship', content: 'The Fortnite Championship is coming soon. Get ready to compete for amazing prizes!' }
    ];

    // Function to load news items
    function loadNews() {
        newsItems.forEach(item => {
            const newsElement = document.createElement('div');
            newsElement.classList.add('news-item');
            newsElement.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
            newsContainer.appendChild(newsElement);
        });
    }

    loadNews();

    // Example contact form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
