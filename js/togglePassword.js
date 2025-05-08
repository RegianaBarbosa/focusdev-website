const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eyeIcon");

togglePassword.addEventListener("click", () => {
  const isVisible = passwordInput.type === "text";
  passwordInput.type = isVisible ? "password" : "text";
  eyeIcon.src = isVisible ? "/assets/ui/eye-off.svg" : "/assets/ui/eye.svg";
  togglePassword.setAttribute(
    "aria-label",
    isVisible ? "Mostra senha" : "Oculta senha"
  );
});
