// Mobile menu toggle.
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("open");
  });
});
