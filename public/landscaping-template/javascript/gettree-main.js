// GetTree Landscaping Template JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }, 1000);
    }

    // Mobile menu toggle
    const btnMenu = document.querySelector('.btn-menu');
    const mainnav = document.querySelector('.mainnav');
    
    if (btnMenu && mainnav) {
        btnMenu.addEventListener('click', function() {
            mainnav.style.display = mainnav.style.display === 'block' ? 'none' : 'block';
            btnMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
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

    // Search functionality
    const showSearchBtn = document.querySelector('.show-search');
    const topSearch = document.querySelector('.top-search');
    
    if (showSearchBtn && topSearch) {
        showSearchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            topSearch.style.opacity = topSearch.style.opacity === '1' ? '0' : '1';
            topSearch.style.visibility = topSearch.style.visibility === 'visible' ? 'hidden' : 'visible';
        });
    }

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Show success message (in a real implementation, you'd send this to your server)
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Add animation classes when elements come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                if (entry.target.classList.contains('service-box')) {
                    entry.target.style.animationDelay = Math.random() * 0.5 + 's';
                }
            }
        });
    }, observerOptions);

    // Observe service boxes for animation
    document.querySelectorAll('.service-box').forEach(box => {
        observer.observe(box);
    });

    // Add parallax effect to hero section
    const heroSection = document.querySelector('.page-title-home1');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.backgroundPosition = `center ${rate}px`;
        });
    }

    // Add floating animation to hero image
    const heroImage = document.querySelector('.img-slide');
    if (heroImage) {
        setInterval(() => {
            heroImage.style.transform = `translateY(${Math.sin(Date.now() * 0.001) * 10}px)`;
        }, 16);
    }

    // Add hover effects to service boxes
    document.querySelectorAll('.service-box').forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Initialize wow.js-like animations
    function initAnimations() {
        const animatedElements = document.querySelectorAll('.wow');
        
        animatedElements.forEach(element => {
            const delay = element.getAttribute('data-wow-delay') || '0ms';
            const duration = element.getAttribute('data-wow-duration') || '1s';
            
            element.style.animationDelay = delay;
            element.style.animationDuration = duration;
        });
    }

    initAnimations();

    // Header scroll effect
    const header = document.querySelector('#header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.classList.remove('scrolled');
                header.style.backgroundColor = 'transparent';
                header.style.backdropFilter = 'none';
            }
        });
    }

    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add counter animation effect (for future stats section)
    function animateCounters() {
        document.querySelectorAll('.counter').forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                counter.textContent = Math.floor(current);
                
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                }
            }, 20);
        });
    }

    // Initialize tooltips (for future use)
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            document.querySelectorAll('.tooltip').forEach(tooltip => tooltip.remove());
        });
    });

    console.log('GetTree Landscaping Template loaded successfully!');
});
