document.addEventListener("keydown", changeBackground);
/*
Para mostrar la tecla presionada en la consola
document.addEventListener("keydown", function(event) {
  console.log(event.key); 
});*/

function changeBackground(event) {
  
  if(event.altKey && event.key === "F12") {
    const img = document.getElementById("imagen");
    img.style.backgroundImage = "url('img/sea-2755858_1280.jpg')";
  }
}

