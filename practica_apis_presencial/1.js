// Función que devuelve una promesa con un timeout
function timeout(ms) {
  return new Promise (resolve => setTimeout(resolve, ms))}


// Función para el countdown
async function iniciarCountdown() {
  let contador = 5;
  const countdownElement = document.getElementById('countdown');

  while (contador >= 0) {
      countdownElement.textContent = contador;
      await timeout(1000);
      contador--;
  }

  // Cuando la cuenta llega a 0, mostramos la notificación
  mostrarNotificacion();
}

// Función para mostrar la notificación 
function mostrarNotificacion() {
  if (!("Notification" in window)) {
      alert("Tu navegador no soporta notificaciones.");
      return;
  }

  // Pedimos permiso al usuario
  Notification.requestPermission().then(permission => {
      if (permission === "granted") {
          const notificacion = new Notification("Nuevo Video Disponible!", {
              body: "Haz clic para ver el nuevo video",
          });
          //console.log('Llega hasta aqui');

          // Cuando el usuario clica en la notificación
          // le lleva  a una página en el que se muestre el video
          notificacion.onclick = () => {
              window.location.href = "video.html";
          };
      } else {
          alert("No tienes permisos para recibir notificaciones.");
      }
  });
}

// Inicia la cuenta atras al cargar la página
window.onload = iniciarCountdown;