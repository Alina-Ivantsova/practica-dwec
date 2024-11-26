document.getElementById("task1").addEventListener("click", showWords);

function showWords() {
    // Limpiamos el array, esto nos asegura que cada vez que pulsemos el botón para iniciar,
    // el array esté vacío y listo para recibir nuevas palabras
    wordsArray = [];    

    const wordsBlock = document.getElementById('words-block');
    // Limpiamos la <ul>
    wordsBlock.innerHTML = ''; 

    popupWords();

    // Ordenamos el array alfabéticamente y en orden descendente
    wordsArray.sort().reverse();
    // recorremos array para mostrar todas las palabras en el <ul>
    wordsArray.forEach((word) => {
        const li = document.createElement('li');
        //Quitamos los puntos de la lista
        li.style.listStyle = 'none';
        // El texto del del <li> va a ser la palabra actual
        li.textContent = word; 
        // Agregamos el <li> al <ul>
        wordsBlock.appendChild(li); 
    });
}