const toggleMenu = document.getElementById("toggleMenu");
const sidebar = document.getElementById("sidebar");

toggleMenu.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
