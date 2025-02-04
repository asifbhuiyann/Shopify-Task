// Dropdown Menu Functionality (Optional)
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
