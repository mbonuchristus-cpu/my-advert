// Simple parallax movement
document.addEventListener("mousemove", e => {
  const grid = document.querySelector(".bg-grid");
  const x = e.clientX / window.innerWidth * 10;
  const y = e.clientY / window.innerHeight * 10;
  grid.style.transform = `translate(${-x}px, ${-y}px)`;
});
// Scroll-based reveal
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


