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
        // Only override click behavior on mobile
        if (window.innerWidth <= 600) {
            e.preventDefault(); // prevent page reload
            servicesDropdown.classList.toggle("active");
        }
    });

    // Close dropdown if clicking outside (mobile only)
    document.addEventListener("click", (e) => {
        if (window.innerWidth <= 600) {
            if (
                !servicesDropdown.contains(e.target) &&
                !servicesLink.contains(e.target)
            ) {
                servicesDropdown.classList.remove("active");
            }
        }
    });

    // Close nav menu after clicking a link (mobile only)
    document.querySelectorAll(".nav-menu li a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 600) {
                navMenu.classList.remove("active");
            }
        });
    });

    // ===== Animate Service Cards =====
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 150);
    });
});
