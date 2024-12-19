<<<<<<< HEAD
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const errorDiv = document.getElementById('error-messages');
=======
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");
const errorDiv = document.getElementById("error-messages");
>>>>>>> e7841842b4fa1ae6e9f4ba12157398ea5354b67a

let emailValid = false;
let passwordValid = false;

//Añadimos los mensajes de error al div ya creado en el html
function showErrorMessage(message) {
<<<<<<< HEAD
  const errorSpan = document.createElement('span');
  errorSpan.style.color = 'red';
  errorSpan.textContent = message;
  errorDiv.appendChild(errorSpan);
  errorDiv.appendChild(document.createElement('br')); // Salto de línea
=======
  const errorSpan = document.createElement("span");
  errorSpan.style.color = "red";
  errorSpan.textContent = message;
  errorDiv.appendChild(errorSpan);
  errorDiv.appendChild(document.createElement("br")); // Salto de línea
>>>>>>> e7841842b4fa1ae6e9f4ba12157398ea5354b67a
}

// Se limpian todos los mensajes de error
function clearErrorMessages() {
<<<<<<< HEAD
  errorDiv.innerHTML = '';
=======
  errorDiv.innerHTML = ""; 
>>>>>>> e7841842b4fa1ae6e9f4ba12157398ea5354b67a
}

//Comprobamos la el email y Llamamos a la función para activar o desactivar el botón
function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(email.value)) {
    emailValid = true;
  } else {
    emailValid = false;
<<<<<<< HEAD
    showErrorMessage('Formato incorrecto para el email: xxxx@yyyy.zzzz');
=======
    showErrorMessage("Formato incorrecto para el email: xxxx@yyyy.zzzz");
>>>>>>> e7841842b4fa1ae6e9f4ba12157398ea5354b67a
  }
  activateSubmitButton();
}

//Comprobamos la longitud de la contraseña y Llamamos a la función para activar o desactivar el botón
function validatePassword() {
  if (password.value.length >= 8 && password.value.length <= 10) {
    passwordValid = true;
  } else {
    passwordValid = false;
<<<<<<< HEAD
    showErrorMessage('La contraseña debe tener entre 8 y 10 caracteres.');
=======
    showErrorMessage("La contraseña debe tener entre 8 y 10 caracteres.");
>>>>>>> e7841842b4fa1ae6e9f4ba12157398ea5354b67a
  }
  activateSubmitButton();
}

// Si la contraseña y el email son válidos, se activa el botón de envío
function activateSubmitButton() {
  if (emailValid && passwordValid) {
<<<<<<< HEAD
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
=======
    submitBtn.disabled = false; 
  } else {
    submitBtn.disabled = true; 
>>>>>>> e7841842b4fa1ae6e9f4ba12157398ea5354b67a
  }
}

// Evento para cuando el campo del correo pierde el foco
<<<<<<< HEAD
email.addEventListener('blur', function () {
  clearErrorMessages();
=======
email.addEventListener("blur", function() {
  clearErrorMessages()
>>>>>>> e7841842b4fa1ae6e9f4ba12157398ea5354b67a
  validateEmail();
});

// Evento para cuando el campo de la contraseña pierde el foco
<<<<<<< HEAD
password.addEventListener('blur', function () {
  clearErrorMessages();
=======
password.addEventListener("blur", function() {
  clearErrorMessages()
>>>>>>> e7841842b4fa1ae6e9f4ba12157398ea5354b67a
  validatePassword();
});

//se limpian los mensajes de error cuando se hace un cambio en el correo o la contraseña.
<<<<<<< HEAD
email.addEventListener('input', clearErrorMessages);
password.addEventListener('input', clearErrorMessages);
=======
email.addEventListener("input", clearErrorMessages);
password.addEventListener("input", clearErrorMessages);
>>>>>>> e7841842b4fa1ae6e9f4ba12157398ea5354b67a
