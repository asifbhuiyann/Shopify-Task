document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");

    dropdown.addEventListener("mouseover", function () {
        dropdown.querySelector(".dropdown-menu").style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
        dropdown.querySelector(".dropdown-menu").style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const toggleBtn = item.querySelector(".toggle-btn");

        toggleBtn.addEventListener("click", () => {
            const isOpen = answer.style.display === "block";

            if (isOpen) {
                answer.style.display = "none";
                toggleBtn.textContent = "+";
            } else {
                answer.style.display = "block";
                toggleBtn.textContent = "−";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {
        const items = carousel.querySelectorAll(".video-card");
        const forwardIcon = document.createElement("div");
        forwardIcon.classList.add("carousel-forward");
        forwardIcon.innerHTML = ">";
        carousel.appendChild(forwardIcon);

        forwardIcon.addEventListener("click", function () {
            for (let i = 0; i < 4; i++) {
                let firstItem = carousel.firstElementChild;
                carousel.appendChild(firstItem);
            }
            carousel.style.transition = "transform 0.8s ease-in-out";
            carousel.style.transform = "translateX(-120%)";
            setTimeout(() => {
                carousel.style.transition = "none";
                carousel.style.transform = "translateX(0)";
            }, 500);
        });
    });
}); 