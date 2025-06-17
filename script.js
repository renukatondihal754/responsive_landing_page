// Mobile Nav Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Scroll Reveal Animation (Intersection Observer)
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "reveal 1s ease forwards";
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => observer.observe(card));
