import { setCookie, getCookie } from './cookie.js';

// Se obtiene el nombre del usuario actual almacenado en localStorage
const currentUserName = localStorage.getItem("currentUser");

const questionInput = document.getElementById('question');
const answerTrueInput = document.getElementById('answer-true');
const answerFalseInput = document.getElementById('answer-false');
const scoreInput = document.getElementById('score');
const saveButton = document.getElementById('save-button');
const backButton = document.getElementById('back-button');
const questionForm = document.getElementById('question-form');
const questionList = document.getElementById('question-list');

// Contador para preguntas guardados pendientes
let pendingQuestions = 0;

// Función para validar el formulario
function validateForm() {
  backButton.disabled;
  const questionText = questionInput.value.trim();
  const isAnswerSelected = answerTrueInput.checked || answerFalseInput.checked;
  const scoreValue = scoreInput.value.trim();
  // Acepta números enteros de 1 a 9
  const isScoreValid = /^[1-9]\d*$/.test(scoreValue);
  //Se deshabilita el botón de guardar si los campos no son validos
  saveButton.disabled = !(questionText && isAnswerSelected && isScoreValid);
  // Deshabilitamos el botón "Atrás" mientras rellenamos el formulario
  backButton.disabled = true;
}

// Función para añadir una pregunta a la lista de preguntas
function addQuestion(questionData, status = 'Guardando...') {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${questionList.children.length + 1}</td>
    <td>${questionData.answer}</td>
    <td>${questionData.score}</td>
    <td class="status">${status}</td>
  `;
  questionList.appendChild(row);
  // Devuelve la celda de estado 
  return row.querySelector('.status');
}

// Función que guarda una pregunta en cookies
function saveQuestionToCookie(questionData) {
  return new Promise((resolve) => {
    // Resuelve el Promise después de guardar
    setTimeout(() => {
      const userData = JSON.parse(getCookie(`userInfo_${currentUserName}`) || '{}');
      const existingQuestions = userData.questions || [];
      existingQuestions.push(questionData);
      userData.questions = existingQuestions;
      setCookie(`userInfo_${currentUserName}`, JSON.stringify(userData), 7);
      resolve();
    }, 5000);
  });
}

// Carga las preguntas al entrar en la pagina
window.onload = function () {
  loadQuestions();
};

// Función deshabilita el botón de volver si hay preguntas pendientes de guardar
function updateBackButton() {
  backButton.disabled = pendingQuestions > 0;
}

//Función para crgar las preguntas
function loadQuestions() {
  questionList.innerHTML = '<tr><td colspan="5">Cargando preguntas...</td></tr>'; 
  const userData = JSON.parse(getCookie(`userInfo_${currentUserName}`) || '{}');
  const questions = userData.questions || []; 

  setTimeout(() => {
    questionList.innerHTML = ''; 
    questions.forEach((q) => addQuestion(q, 'OK'));
    updateBackButton();
  }, 5000);
}

  // El envio de formulario
  questionForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Se crea un objeto con los datos de la pregunta
  const questionData = {
    question: questionInput.value.trim(),
    answer: answerTrueInput.checked ? 'verdadero' : 'falso',
    score: scoreInput.value.trim(),
  };

  // Se añade la pregunta a la lista y se recibe la celda de estado
  const statusCell = addQuestion(questionData);

  // Resetea validación después de limpiar el formulario
  questionForm.reset();
  validateForm();

  // Añadimos a las preguntas que se guardan
  pendingQuestions++;
  // Actualiza el estado del botón "Atrás" 
  updateBackButton();

  saveQuestionToCookie(questionData)
    .then(() => {
      // Cambia el estado a "OK"
      statusCell.textContent = 'OK';
    })
    .catch(() => {
      // En caso de que haya error
      statusCell.textContent = 'ERROR';
    })
    .finally(() => {
      // una vez finalizado, decrementamos el contador de preguntas pendientes de guardar
      pendingQuestions--;
      // Actualizamos el estado del botón "volver"
      updateBackButton();
    });
});

questionInput.addEventListener('input', validateForm);
answerTrueInput.addEventListener('change', validateForm);
answerFalseInput.addEventListener('change', validateForm);
scoreInput.addEventListener('input', validateForm);

// Evento para volver a la pantalla anteerior
backButton.addEventListener('click', () => {
  window.history.back();
});

