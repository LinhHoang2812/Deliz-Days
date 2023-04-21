const btn = document.querySelector(".nav-toggle");
const toggle = document.querySelector("ul");
const navbar = document.querySelector("nav");
const date = document.querySelector(".date");

btn.addEventListener("click", function () {
  // toggle.classList.toggle("show-links");
  const toggleHeight = toggle.getBoundingClientRect().height;
  console.log(toggleHeight);

  if (toggleHeight === 0) {
    toggle.style.height = "200px";
  } else {
    toggle.style.height = 0;
  }
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth < 800) {
    toggle.style.height = 0;
  }
});

window.addEventListener("scroll", function () {
  const navHeight = navbar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
});

let currentYear = new Date().getFullYear();
date.textContent = currentYear;

const scrollLink = document.querySelector(".scroll-link");

scrollLink.addEventListener("click", function (e) {
  e.preventDefault();

  const navHeight = navbar.getBoundingClientRect().height;
  const toggleHeight = toggle.getBoundingClientRect().height;
  const fixedNavbar = navbar.classList.contains("fixed-navbar");
  const idSection = e.currentTarget.getAttribute("href");
  const section = document.querySelector(idSection);

  let position = section.offsetTop - navHeight;
  console.log(position);

  if (toggleHeight > 0) {
    position = position + toggleHeight;
  }

  window.scrollTo({ left: 0, top: position });
  toggle.style.height = 0;
});
