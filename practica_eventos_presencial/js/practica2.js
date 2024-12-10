const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");
const errorDiv = document.getElementById("error-messages");

let emailValid = false;
let passwordValid = false;

//Añadimos los mensajes de error al div ya creado en el html
function showErrorMessage(message) {
  const errorSpan = document.createElement("span");
  errorSpan.style.color = "red";
  errorSpan.textContent = message;
  errorDiv.appendChild(errorSpan);
  errorDiv.appendChild(document.createElement("br")); // Salto de línea
}

// Se limpian todos los mensajes de error
function clearErrorMessages() {
  errorDiv.innerHTML = ""; 
}

//Comprobamos la el email y Llamamos a la función para activar o desactivar el botón
function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(email.value)) {
    emailValid = true;
  } else {
    emailValid = false;
    showErrorMessage("Formato incorrecto para el email: xxxx@yyyy.zzzz");
  }
  activateSubmitButton();
}

//Comprobamos la longitud de la contraseña y Llamamos a la función para activar o desactivar el botón
function validatePassword() {
  if (password.value.length >= 8 && password.value.length <= 10) {
    passwordValid = true;
  } else {
    passwordValid = false;
    showErrorMessage("La contraseña debe tener entre 8 y 10 caracteres.");
  }
  activateSubmitButton();
}

// Si la contraseña y el email son válidos, se activa el botón de envío
function activateSubmitButton() {
  if (emailValid && passwordValid) {
    submitBtn.disabled = false; 
  } else {
    submitBtn.disabled = true; 
  }
}

// Evento para cuando el campo del correo pierde el foco
email.addEventListener("blur", function() {
  clearErrorMessages()
  validateEmail();
});

// Evento para cuando el campo de la contraseña pierde el foco
password.addEventListener("blur", function() {
  clearErrorMessages()
  validatePassword();
});

//se limpian los mensajes de error cuando se hace un cambio en el correo o la contraseña.
email.addEventListener("input", clearErrorMessages);
password.addEventListener("input", clearErrorMessages);