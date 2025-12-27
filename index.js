// Typing effect
const text = "Design. Animate. Impress.";
let i = 0;
const typing = document.getElementById("typing");

function typeEffect() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

// Scroll reveal + parallax
const reveals = document.querySelectorAll(".reveal");
const parallax = document.querySelector(".parallax");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });

  parallax.style.transform =
    `translateY(${window.scrollY * 0.3}px)`;
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

// Dark / Light toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});
