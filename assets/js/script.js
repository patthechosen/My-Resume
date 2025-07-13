document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".skills-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.target);
      target.classList.toggle("hidden");
    });
  });
});