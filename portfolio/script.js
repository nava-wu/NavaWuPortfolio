// Page navigation
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
    
    // Add animation to project cards on hover
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Initialize page
    const activePage = document.querySelector('.page.active');
    if (!activePage) {
        showPage('landing');
    }
});

// Optional: Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const pages = ['landing', 'about', 'projects', 'work'];
    const currentPage = document.querySelector('.page.active');
    const currentIndex = pages.findIndex(page => 
        document.getElementById(page) === currentPage
    );
    
    // Left arrow - previous page
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        showPage(pages[currentIndex - 1]);
    }
    
    // Right arrow - next page
    if (e.key === 'ArrowRight' && currentIndex < pages.length - 1) {
        showPage(pages[currentIndex + 1]);
    }
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.project-card, .work-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});