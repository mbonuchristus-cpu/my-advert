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

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if(response.ok){
      alert("Message sent! I will respond shortly.");
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  });
});

