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

  window.location.href = "/home.html";
});

// Clear previous error messages
function clearErrors(emailInput, passwordInput) {
  emailInput.classList.remove("input-error");
  passwordInput.classList.remove("input-error");
  document.querySelectorAll(".error-message").forEach((el) => el.remove());
}

function showErrors(emailWrong, passwordWrong, emailInput, passwordInput) {
  const emailWrapper = emailInput.closest(
    ".login__container__form__email-wrapper"
  );
  const passwordWrapper = passwordInput.closest(
    ".login__container__form__password-wrapper"
  );

  if (emailWrong || passwordWrong) {
    //Add error class to inputs
    if (emailWrong) emailInput.classList.add("input-error");
    if (passwordWrong) passwordInput.classList.add("input-error");

    //Add error message to inputs
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");

    if (emailWrong && passwordWrong) {
      errorMessage.textContent = "E-mail e senha inválidos";
      passwordWrapper.appendChild(errorMessage);
    } else if (emailWrong) {
      errorMessage.textContent = "Seu e-mail está incorreto";
      emailWrapper.appendChild(errorMessage);
    } else if (passwordWrong) {
      errorMessage.textContent = "Sua senha está incorreta";
      passwordWrapper.appendChild(errorMessage);
    }
  }
}
