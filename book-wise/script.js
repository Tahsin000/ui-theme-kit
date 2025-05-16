// Mobile navigation
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const navLinks = document.querySelector(".nav-links");
const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
const mobileNavClose = document.getElementById("mobile-nav-close");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");

// Mobile navigation
if (mobileNavToggle) {
  mobileNavToggle.addEventListener("click", () => {
    mobileNavOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
  });
}

if (mobileNavClose) {
  mobileNavClose.addEventListener("click", () => {
    mobileNavOverlay.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
  });
}

// Close mobile menu when clicking outside the menu
mobileNavOverlay.addEventListener("click", (e) => {
  if (e.target === mobileNavOverlay) {
    mobileNavOverlay.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
  }
});

// Close mobile menu when clicking a link
mobileNavLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileNavOverlay.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
  });
});

// Theme switcher
const themeSwitch = document.getElementById("theme-switch");
const themeIcon = themeSwitch.querySelector("i");

themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});

// Back to top button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Form validation
const demoForm = document.getElementById("demo-form");

if (demoForm) {
  demoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!name || !email || !date || !time) {
      alert("Please fill in all required fields");
      return;
    }

    // Demo form submission - would normally submit to server
    alert(
      "Thank you! Your demo has been scheduled. We will contact you shortly to confirm."
    );
    demoForm.reset();
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    e.preventDefault();

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
}); 
