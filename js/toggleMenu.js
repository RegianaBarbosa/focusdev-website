const toggleMenu = document.getElementById("toggleMenu");
const sidebar = document.getElementById("sidebar");

toggleMenu.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !toggleMenu.contains(event.target)) {
    sidebar.classList.remove("open");
  }
});
