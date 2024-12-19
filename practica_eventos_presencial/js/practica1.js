<<<<<<< HEAD
document.addEventListener('keydown', changeBackground);
=======
document.addEventListener("keydown", changeBackground);
>>>>>>> e7841842b4fa1ae6e9f4ba12157398ea5354b67a
/*
Para mostrar la tecla presionada en la consola
document.addEventListener("keydown", function(event) {
  console.log(event.key); 
});*/

function changeBackground(event) {
<<<<<<< HEAD
  if (event.altKey && event.key === 'F12') {
    const img = document.getElementById('imagen');
    img.style.backgroundImage = "url('img/sea-2755858_1280.jpg')";
  }
}
=======
  
  if(event.altKey && event.key === "F12") {
    const img = document.getElementById("imagen");
    img.style.backgroundImage = "url('img/sea-2755858_1280.jpg')";
  }
}

>>>>>>> e7841842b4fa1ae6e9f4ba12157398ea5354b67a
