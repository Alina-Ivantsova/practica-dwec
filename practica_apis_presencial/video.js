const video = document.getElementById("video");
const videoDurationText = document.getElementById("video-duration");

// Reproducción con clic izquierdo
video.addEventListener("click", () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// Al hacer clic con el botón derecho del ratón en el video, aparece un texto en la parte
// inferior que nos dice el tiempo total del vídeo en minutos y segundos.
video.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Evitar menú contextual
    const minutos = Math.floor(video.duration / 60);
    const segundos = Math.floor(video.duration % 60);
    videoDurationText.textContent = `Duración total: ${minutos} minutos y ${segundos} segundos`;
});