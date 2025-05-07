const btnLogout = document.getElementById("logout");

btnLogout.addEventListener("click", () => {
  localStorage.clear();

  window.location.href = "index.html";
});
