document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(preloader);

    // Hide preloader after page loads
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('fade-out');
            setTimeout(function() {
                preloader.remove();
            }, 500);
        }, 800);
    });

    // Create scroll to top button
    const scrollTopBtn = document.createElement('div');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate toggle icon
            this.classList.toggle('active');
            const spans = this.querySelectorAll('span');
            
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            
            if (navToggle.classList.contains('active')) {
                navToggle.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // Sticky header on scroll
    const header = document.getElementById('header');
    const scrollWatcher = () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };
    
    window.addEventListener('scroll', scrollWatcher);
    
    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    
    const setActiveLink = () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', setActiveLink);
    
    // Enhanced floating labels for contact form
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    // Add label elements to form inputs
    formInputs.forEach(input => {
        const label = document.createElement('label');
        label.setAttribute('for', input.id);
        label.textContent = input.placeholder;
        input.parentNode.appendChild(label);
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get the submit button and show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                return;
            }
            
            // Simulate sending (would be replaced with actual form submission)
            setTimeout(function() {
                // Success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you for your message. I will get back to you soon!';
                successMessage.style.color = 'var(--primary-color)';
                successMessage.style.backgroundColor = 'var(--light-green)';
                successMessage.style.padding = '15px';
                successMessage.style.borderRadius = 'var(--border-radius)';
                successMessage.style.marginTop = '20px';
                successMessage.style.textAlign = 'center';
                
                // Insert after form
                contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Remove success message after 5 seconds
                setTimeout(function() {
                    successMessage.style.opacity = '0';
                    successMessage.style.transition = 'opacity 0.5s ease';
                    setTimeout(function() {
                        successMessage.remove();
                    }, 500);
                }, 5000);
            }, 1500);
        });
    }
    
    // Smooth scroll animations for elements
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.timeline-item, .highlight-item, .section-header');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Run animations on load and scroll
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Add hover effects to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.timeline-icon');
            icon.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.timeline-icon');
            icon.style.transform = 'scale(1)';
        });
    });
    
    // Add subtle parallax effect to hero section
    const heroSection = document.querySelector('.hero-section');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroSection && heroImage) {
        window.addEventListener('scroll', function() {
            const scrollValue = window.scrollY;
            if (scrollValue < heroSection.offsetHeight) {
                heroImage.style.transform = `translateY(${scrollValue * 0.2}px)`;
            }
        });
    }
    
    // Add typing effect to hero subtitle
    const heroSubtitle = document.querySelector('.hero-text h2');
    
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        let i = 0;
        const typeEffect = setInterval(function() {
            if (i < originalText.length) {
                heroSubtitle.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeEffect);
            }
        }, 100);
    }
}); 
