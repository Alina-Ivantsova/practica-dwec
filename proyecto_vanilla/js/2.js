import { setCookie, getCookie } from './cookie.js';

// Llama a la función showUserInfo cuando se carga la página
window.onload = function () {
  showUserInfo();
}

// Función para mostrar información del usuario, su nombre (email)
// y la fecha y hora de la ultima visita 
function showUserInfo() {
  // Se obtiene el nombre de usuario actual del localStorage
  const username = localStorage.getItem("currentUser");
  // Si hay un nombre almecenado, obtiene la cookie del usuario
  if (username) {
    const userInfo = getCookie(`userInfo_${username}`);
    // Se parsea la información de usuario 
    const userData = JSON.parse(userInfo);
    // Se convierte la fecha de la ultima visita a una cadena 
    const lastLogin = new Date(userData.lastLogin).toLocaleString();
    // Se crea un nuevo elemento de div para mostrar el mensaje al usuario
    const divMessage = document.createElement('div');
    divMessage.innerHTML = `<p>Hola, ${username}.</p><p>La última vez que entraste fue el ${lastLogin}.</p>`;
    divMessage.classList.add('.center-box');
    document.body.appendChild(divMessage);

     // Se crea un nuevo botón para dirigir al usuario a la sección de preguntas
    const questionsBtn = document.createElement("button");
    questionsBtn.id = "questionsBtn";
    questionsBtn.innerText = "Preguntas";
    document.body.appendChild(questionsBtn);

    // se añade el evento de clic para redirigir a la pantalla 3
    questionsBtn.addEventListener("click", () => {
      window.location.href = './3.html';
    });

  }
}