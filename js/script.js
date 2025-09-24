document.addEventListener("DOMContentLoaded", () => {
    // ===== Hamburger Menu Toggle =====
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // ===== Mobile Services Dropdown Toggle =====
    const servicesDropdown = document.getElementById("services-dropdown");
    const servicesLink = document.getElementById("services-link");

    servicesLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link behavior
        if (window.innerWidth <= 600) {
            servicesDropdown.classList.toggle("active");
        }
    });

    // Close mobile dropdown if clicking outside
    document.addEventListener("click", (e) => {
        if (window.innerWidth <= 600) {
            if (!servicesDropdown.contains(e.target)) {
                servicesDropdown.classList.remove("active");
            }
        }
    });

    // Close mobile nav menu when a link is clicked
    document.querySelectorAll(".nav-menu li a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 600) {
                navMenu.classList.remove("active");
            }
        });
    });

    // ===== Show Service Cards
