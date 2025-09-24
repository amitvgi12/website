// ===== Hamburger Menu Toggle =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// ===== Mobile Services Dropdown Toggle =====
const servicesLink = document.getElementById("services-link");
const dropdownContent = document.querySelector("#services-dropdown .dropdown-content");

servicesLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent page jump
    if (window.innerWidth <= 600) {
        dropdownContent.classList.toggle("active");
    }
});

// Close mobile dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (window.innerWidth <= 600) {
        const isClickInside = servicesLink.contains(e.target) || dropdownContent.contains(e.target);
        if (!isClickInside) {
            dropdownContent.classList.remove("active");
        }
    }
});

// Close mobile nav menu when clicking a link
document.querySelectorAll(".nav-menu li a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 600) {
            navMenu.classList.remove("active");
        }
    });
});

// ===== Show Service Cards on page load =====
window.addEventListener("DOMContentLoaded", () => {
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 150); // staggered fade-in effect
    });
});
