// Nav responsive toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
});
// Close nav on link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

// Scroll-triggered animations for .product-card and testimonials
function onScrollAnimate() {
  const animateEls = document.querySelectorAll('.animate-on-scroll,.testimonial-card');
  const triggerBottom = window.innerHeight * 0.92;
  animateEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    }
  });
}
// Initial + scroll
window.addEventListener('scroll', onScrollAnimate);
window.addEventListener('DOMContentLoaded', () => {
  onScrollAnimate();
  // Animate hero-content fade-in
  document.querySelector('.hero-content').classList.add('fade-in');
});

// Smooth scroll for nav links (for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 58,
        behavior: 'smooth'
      });
    }
  });
});
