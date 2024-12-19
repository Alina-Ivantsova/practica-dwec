document.addEventListener('keydown', changeBackground);

function changeBackground(event) {
  if (event.ctrlKey && event.key === 'F11') {
    event.preventDefault(); //para quitar el comportamiento por defecto
    showLoginInput();
  } else {
    setTimeout(() => {
      showLoginInput();
    }, 5000);
  }
}

function showLoginInput() {
  let form = document.createElement('form');
  let input = document.createElement('input');
  let label = document.createElement('label');

  label.textContent = 'Usuario';
  label.style.display = 'block';
  input.style.display = 'block';

  input.setAttribute('id', 'name');

  form.appendChild(input);
  form.appendChild(label);
}

let user = document.getElementById('user');

function validateUser() {
  //comprobar si correponde a o que se pide
  const userEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (userEmailRegex.test(user.value)) {
    emailValid = true;
  } else {
    emailValid = false;
    showErrorMessage('Formato incorrecto para el email: xxxx@yyyy.zzzz');
  }
}

user.addEventListener('blur', function () {
  clearErrorMessages();
  validateEmail();
});

//import para añadir codigo de otro js

// Datos del usuario
const userData = {
  id: 1,
  username: 'john_doe', //añadir de input
  preferences: {
    theme: 'dark',
    language: 'en',
  },
};

// Convertir el objeto a JSON
const userDataJSON = JSON.stringify(userData);

//

//window.location.href="pantalla2"
