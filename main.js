/*==================== MENU TOGGLE ====================*/
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('#navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

// Close menu when clicking on a nav link
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
    });
});

/*==================== ACTIVE NAV LINK ON SCROLL ====================*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

/*==================== TYPING ANIMATION ====================*/
const typed = new Typed('.typing', {
    strings: ['Software Developer', 'Data Analyst', 'ML Enthusiast'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const typed2 = new Typed('.typing-2', {
    strings: ['Software Developer', 'Data Analyst', 'ML Enthusiast'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
window.addEventListener('load', () => {
    // Animate home content
    setTimeout(() => {
        const h5Element = document.querySelector('.text-container h5');
        if (h5Element) {
            h5Element.style.opacity = '1';
            h5Element.style.transform = 'translateY(0)';
        }
    }, 300);
    
    setTimeout(() => {
        const h1Element = document.querySelector('.text-container h1');
        if (h1Element) {
            h1Element.style.opacity = '1';
            h1Element.style.transform = 'translateY(0)';
        }
    }, 600);
    
    setTimeout(() => {
        const h3Element = document.querySelector('.text-container h3');
        if (h3Element) {
            h3Element.style.opacity = '1';
            h3Element.style.transform = 'translateY(0)';
        }
    }, 900);
    
    setTimeout(() => {
        const socialLinks = document.querySelector('.social-links');
        if (socialLinks) {
            socialLinks.style.opacity = '1';
            socialLinks.style.transform = 'translateY(0)';
        }
    }, 1200);
    
    setTimeout(() => {
        const buttons = document.querySelectorAll('.text-container .btn');
        buttons.forEach(btn => {
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        });
    }, 1500);
    
    setTimeout(() => {
        const imageContainer = document.querySelector('.image-container');
        if (imageContainer) {
            imageContainer.style.opacity = '1';
            imageContainer.style.transform = 'translateX(0)';
        }
    }, 1800);
});

/*==================== SCROLL TO TOP BUTTON ====================*/
// Create the button element
const scrollTopBtn = document.createElement('div');
scrollTopBtn.classList.add('scroll-top-btn');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

// Add styles via JavaScript
const style = document.createElement('style');
style.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: var(--secondary-color);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 99;
        box-shadow: 0 0 10px var(--shadow-color);
    }
    
    .scroll-top-btn.active {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-top-btn:hover {
        transform: translateY(-5px);
    }
`;
document.head.appendChild(style);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

// Scroll to top when button is clicked
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*==================== PAGE PRELOADER ====================*/
window.addEventListener('load', () => {
    // Create preloader elements
    const preloader = document.createElement('div');
    preloader.classList.add('preloader');
    
    const loader = document.createElement('div');
    loader.classList.add('loader');
    
    preloader.appendChild(loader);
    document.body.appendChild(preloader);
    
    // Add styles
    const preloaderStyle = document.createElement('style');
    preloaderStyle.textContent = `
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--background-color);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        .loader {
            width: 60px;
            height: 60px;
            border: 5px solid var(--secondary-color);
            border-top: 5px solid var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .preloader.fade-out {
            opacity: 0;
            visibility: hidden;
        }
    `;
    document.head.appendChild(preloaderStyle);
    
    // Remove preloader after page loads
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1000);
});

// Initialize animations for sections on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Add animation classes and observe sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('animate-section');
    observer.observe(section);
});

// Add animation styles
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .animate-section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-section.in-view {
        opacity: 1;
        transform: translateY(0);
    }
    
    .text-container h5, .text-container h1, .text-container h3, .social-links, .text-container .btn {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .image-container {
        opacity: 0;
        transform: translateX(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
`;
document.head.appendChild(animationStyle);

/*==================== SMOOTH SCROLLING FOR NAV LINKS ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/*==================== PREVENT DEFAULT FOR DISABLED LINKS ====================*/
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
    });
});