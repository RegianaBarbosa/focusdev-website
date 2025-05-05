document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio padrão

  const emailDefault = "admin@focusdev.com";
  const passwordDefault = "fOcusDev123";

  // Get the input elements
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  clearErrors(emailInput, passwordInput);

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  let emailWrong = email !== emailDefault;
  let passwordWrong = password !== passwordDefault;

  if (emailWrong || passwordWrong) {
    // Show error messages
    showErrors(emailWrong, passwordWrong, emailInput, passwordInput);
    return;
  }

  window.location.href = "/inicio";
});

// Clear previous error messages
function clearErrors(emailInput, passwordInput) {
  emailInput.classList.remove("input-error");
  passwordInput.classList.remove("input-error");
  document.querySelectorAll(".error-message").forEach((el) => el.remove());
}

function showErrors(emailWrong, passwordWrong, emailInput, passwordInput) {
  if (emailWrong || passwordWrong) {
    //Add error class to inputs
    if (emailWrong) emailInput.classList.add("input-error");
    if (passwordWrong) passwordInput.classList.add("input-error");

    //Add error message to inputs
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");

    if (emailWrong && passwordWrong) {
      errorMessage.textContent = "E-mail e senha inválidos";
      passwordInput.parentNode.appendChild(errorMessage);
    } else if (emailWrong) {
      errorMessage.textContent = "Seu e-mail está incorreto";
      emailInput.parentNode.appendChild(errorMessage);
    } else if (passwordWrong) {
      errorMessage.textContent = "Sua senha está incorreta";
      passwordInput.parentNode.appendChild(errorMessage);
    }
  }
}
