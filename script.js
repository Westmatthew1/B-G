// Basic interactions: mobile menu, smooth scroll, typed text animation, testimonial slider
document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  toggle &&
    toggle.addEventListener("click", () => {
      if (nav.style.display === "flex") nav.style.display = "";
      else nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.gap = "12px";

      
    });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
    });
  });

  // Simple typed text cycling
  const typedEl = document.querySelector(".typed");
  const words = [
    "excel academically",
    "discover purpose",
    "build winning habits",
    "pass exams with confidence",
  ];
  let idx = 0;
  function typeWord(word, callback) {
    typedEl.textContent = "";
    let i = 0;
    const t = setInterval(() => {
      typedEl.textContent += word[i++] || "";
      if (i > word.length) {
        clearInterval(t);
        setTimeout(callback, 1000);
      }
    }, 60);
  }
  function startTyping() {
    typeWord(words[idx], () => {
      idx = (idx + 1) % words.length;
      startTyping();
    });
  }
  if (typedEl) startTyping();

  // Testimonials slider
  const slides = document.querySelectorAll(".slide");
  let current = 0;
  function showSlide(n) {
    slides.forEach((s, i) => s.classList.toggle("active", i === n));
  }
  showSlide(current);
  document.querySelector(".slide-btn.next").addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });
  document.querySelector(".slide-btn.prev").addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });
  // Auto-advance
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 6000);
});


//redirect function(contact form)
function redirectThankYou() {
  // Wait a moment to let the form submit, then redirect
  setTimeout(() => {
    window.location.href = "./thank-you.html";
  }, 1000);
  return true; // allow form to submit
}
