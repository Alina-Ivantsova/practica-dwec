import { setCookie, getCookie } from './cookie.js';

let inputShown = false;

let messageDiv = document.getElementById('divMessage');

document.addEventListener('keydown', changeBackground);

// Se muestra el input al pulsar Ctrl + F10 si no se mostrado antes
function changeBackground(event) {
  if (event.ctrlKey && event.key === 'F10' && !inputShown) {
    // Quita el comportamiento por defecto
    event.preventDefault();
    showLoginInput();
  }
}

// Se muestra el input solo si no se ha mostrado antes
setTimeout(() => {
  if (!inputShown) {
    showLoginInput();
  }
}, 5000);

// Muestra el formulario de entrada de usuario
function showLoginInput() {
  inputShown = true;

  // Se oculta el primer mensaje que vemos al abrir la app
  let message = document.getElementById('message');
  if (message) {
    message.style.display = 'none';
  }
  // Se crean el formulario y los elementos del input
  let form = document.createElement('form');
  let userInput = document.createElement('input');
  let label = document.createElement('label');

  label.textContent = 'Usuario';
  label.setAttribute('for', 'user');
  userInput.setAttribute('id', 'user');
  userInput.setAttribute('type', 'text');
  userInput.setAttribute('required', true);
  label.style.display = 'block';
  userInput.style.display = 'block';

  form.appendChild(label);
  form.appendChild(userInput);
  messageDiv.appendChild(form);


  // Se valida el usuario al hacer submit/enter
  form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    if (validateUser(userInput)) {
      window.location.href = './2.html';
    }
  });

  // Valida el correo electrónico cuando el campo pierda el enfoque
  userInput.addEventListener('blur', function () {
    validateUser(userInput);
  });

}

// Función para validar el usuario 
function validateUser(userInput) {
  const userEmailRegex = /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  if (userEmailRegex.test(userInput.value)) {
    // se eliminan los mensajes de error si hay y se almecenan los datos de usuario
    clearErrorMessages();
    storeUserData(userInput.value);
    return true;
    // redirige a la pantalla 2
  } else {
    // Si el formato no es válido, muestra mensaje de error, volviendo el enfoque al input y seleccionando el texto
    showErrorMessage();
    userInput.focus();
    userInput.select();
    return false;
  }
}

// Función para almacenar los datos del usuario en cookies
function storeUserData(username) {
  // se obtiene la fecha actual
  const now = new Date();
  const cookieName = `userInfo_${username}`;

  // Comprobamos si la cookie ya existe
  const existingUserData = getCookie(cookieName);

  if (existingUserData) {
    // Si ya existe, actualizamos la fecha de la última visita
    const userData = JSON.parse(existingUserData);
    // Actualizamos la fecha y hora de última visita y la cookie
    userData.lastLogin = now.toISOString();
    setCookie(cookieName, JSON.stringify(userData), 7);
  } else {
    // Si no existe, almacenamos un nuevo usuario
    const userData = {
      username: username,
      lastLogin: now.toISOString(),
      questions: [],
    };
    // se establece la cookie con los datos del usuario con la duración 7 días
    setCookie(`userInfo_${username}`, JSON.stringify(userData), 7);
  }
  // Guardamos el nombre de usuario en localStorage
  localStorage.setItem("currentUser", username);
}

// Función para mostrar un mensaje de error si el formato de correo es incorrecto
// crea un nuevo div para el mensaje de error
function showErrorMessage() {
  clearErrorMessages();
  const errorDiv = document.createElement('div');
  errorDiv.textContent = 'Formato incorrecto para el email: xxx@yyy.zzz';
  errorDiv.style.color = 'red';
  errorDiv.id = 'error-message';
  messageDiv.appendChild(errorDiv);
}

// Función para limpiar los mensajes de error si existen
function clearErrorMessages() {
  const errorDiv = document.getElementById('error-message');
  if (errorDiv) {
    errorDiv.remove();
  }
}

