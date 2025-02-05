function timeout(ms) {
  return new Promise (resolve => setTimeout(resolve, ms))}

/*function showNotification() {
  if('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        
        setTimeout(() => {
          try {
        console.log('Permiso concedido para mostrar notificaciones');
        const notification = new Notification ('Hola!', {
          body: 'Haz clic aquí para ver el video.',
          icon: 'https://picsum.photos/280/200?random=1',
        });
        
        notification.onclick = function() {
          window.open('1-video.html', '_blank');
        };
      } catch (error) {
        console.error('Error al mostrar la notificación:', error);
        alert('Error al mostrar la notificación.');
      }
      }, 100); // Pequeño retraso para evitar posibles bloqueos
    } else {
      console.warn('Permiso denegado para mostrar notificaciones.');
        alert ('Permiso denegado para mostrar notificaciones.');
      }
    });
  } else {
    console.error('La API de notificaciones no está disponible en este navegador.');
    alert('La API de notificaciones no está disponible en este navegador.');
  }
}

async function countdownFunc() {
  let countdown = 5;
  const countdownNum = document.getElementById('countdown');

  while (countdown>=0) {
    countdownNum.innerText = countdown;
    await timeout(1000);
    countdown--;
  }
  showNotification();
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('La página se ha cargado')
  // Iniciar la cuenta atrás al cargar la página
  countdownFunc();
});*/

// Función que devuelve una promesa con un timeout
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Función para la cuenta atrás
async function iniciarCuentaRegresiva() {
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

// Función para mostrar la notificación del sistema
function mostrarNotificacion() {
  if (!("Notification" in window)) {
      alert("Tu navegador no soporta notificaciones.");
      return;
  }

  // Pedimos permiso al usuario
  Notification.requestPermission().then(permission => {
      if (permission === "granted") {
          const notificacion = new Notification("¡Nuevo Video Disponible!", {
              body: "Haz clic para ver el nuevo video 🎥",
              icon: "https://picsum.photos/280/200?random=1"
          });

          // Redirigir al hacer clic en la notificación
          notificacion.onclick = () => {
              window.location.href = "video.html";
          };
      } else {
          alert("No tienes permisos para recibir notificaciones.");
      }
  });
}

// Iniciar cuenta regresiva al cargar la página
window.onload = iniciarCuentaRegresiva;