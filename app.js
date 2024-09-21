const collapsible = document.querySelectorAll(".collapsible");

collapsible.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("collapsible--expanded");
  });
});

const nav = document.querySelector(".nav");
const navToggler = document.querySelector(".nav__toggler");
navToggler.addEventListener("click", () => {
  nav.classList.toggle("collapsible--expanded");
});

// script.js
// script.js

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section.hidden");
  let lastScrollY = window.scrollY;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const currentScrollY = window.scrollY;

        if (entry.isIntersecting && currentScrollY > lastScrollY) {
          // When scrolling down, add the 'visible' class
          entry.target.classList.add("visible");
        } else if (!entry.isIntersecting && currentScrollY < lastScrollY) {
          // Reset the 'visible' class when scrolling up and out of view
          entry.target.classList.remove("visible");
        }
      });

      lastScrollY = window.scrollY;
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
