document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Mobile Menu Toggle
    const navMenu = document.querySelector("nav ul");
    const menuToggle = document.createElement("button");
    menuToggle.textContent = "☰ Menu";
    menuToggle.classList.add("menu-toggle");

    document.querySelector("header").insertBefore(menuToggle, navMenu);

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
    });

    // Fade-in Animation on Scroll
    const sections = document.querySelectorAll("section");

    const revealSections = () => {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run once on page load

    // Contact Form Handling
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            status.textContent = "All fields are required!";
            status.style.color = "red";
            return;
        }

        setTimeout(() => {
            status.textContent = "Message sent successfully!";
            status.style.color = "green";
            form.reset();
        }, 1000);
    });
});


  