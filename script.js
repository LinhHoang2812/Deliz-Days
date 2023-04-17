const btn = document.querySelector(".nav-toggle");
const nav = document.querySelector("ul");

btn.addEventListener("click", function () {
  nav.classList.toggle("show-links");
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth < 800) {
    nav.classList.remove("show-links");
  }
});
