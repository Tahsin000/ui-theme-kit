// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality
  initMobileMenu();
  initSmoothScroll();
  initScrollSpy();
  initBackToTop();
  initTestimonialSlider();
  initFormValidation();
});

// Mobile Menu Toggle
function showMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
}

function hideMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

// Initialize Mobile Menu
function initMobileMenu() {
  // Make sure the menu toggle buttons are working
  const openMenuBtn = document.querySelector('.open-menu');
  const closeMenuBtn = document.querySelector('.close-menu');
  
  if (openMenuBtn) {
    openMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      showMenu();
    });
  }
  
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      hideMenu();
    });
  }
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hideMenu();
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    const navLinksEl = document.getElementById('navLinks');
    const openMenuEl = document.querySelector('.open-menu');
    
    if (navLinksEl && navLinksEl.classList.contains('active') && 
        !navLinksEl.contains(e.target) && 
        e.target !== openMenuEl) {
      hideMenu();
    }
  });
}

// Smooth Scroll
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // Skip if it's not a navigation link
      if (this.getAttribute('href') === '#') return;
      
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Scroll Spy
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  // Set active nav link on page load
  setActiveNavLink();
  
  // Update active nav link on scroll
  window.addEventListener('scroll', setActiveNavLink);
  
  function setActiveNavLink() {
    let current = '';
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
    
    // If at the top of the page and no section is active, activate home
    if (scrollPosition < 100 && current === '') {
      const homeLink = document.querySelector('.nav-links a[href="#home"]');
      if (homeLink) {
        homeLink.classList.add('active');
      }
    }
  }
}

// Back to Top Button
function initBackToTop() {
  const backToTopButton = document.getElementById('backToTop');
  
  if (!backToTopButton) return;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });
  
  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Testimonial Slider
let currentSlide = 0;

function initTestimonialSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  if (slides.length === 0) return;
  
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  // Show first slide initially
  showSlide(currentSlide);
  
  // Set up button click events
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      prevSlide();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      nextSlide();
    });
  }
  
  // Set up dot click events
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      showSlide(index);
    });
  });
  
  // Set up auto slide change
  setInterval(function() {
    nextSlide();
  }, 5000);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  
  if (slides.length === 0) return;
  
  // Ensure n is within bounds
  if (n >= slides.length) n = 0;
  if (n < 0) n = slides.length - 1;
  
  // Hide all slides and remove active class from dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Show the selected slide and set the corresponding dot as active
  slides[n].classList.add('active');
  dots[n].classList.add('active');
  
  // Update current slide index
  currentSlide = n;
}

function nextSlide() {
  const slides = document.querySelectorAll('.testimonial-slide');
  if (slides.length === 0) return;
  showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  const slides = document.querySelectorAll('.testimonial-slide');
  if (slides.length === 0) return;
  showSlide((currentSlide - 1 + slides.length) % slides.length);
}

// Form Validation
function initFormValidation() {
  const dealershipForm = document.getElementById('dealershipForm');
  
  if (dealershipForm) {
    dealershipForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic form validation
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const district = document.getElementById('district').value;
      const investment = document.getElementById('investment').value;
      
      // Check required fields
      if (!name || !phone || !email || !district || !investment) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Validate phone format (simplified)
      const phoneRegex = /^[0-9+\s\-()]{10,}$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
      }
      
      // If validation passes, show success message
      alert('Thank you for your application! We will contact you soon.');
      dealershipForm.reset();
    });
  }
  
  // Newsletter form validation
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input[type="email"]').value;
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // If validation passes, show success message
      alert('Thank you for subscribing to our newsletter!');
      this.reset();
    });
  }
} 
