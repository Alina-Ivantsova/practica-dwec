document.getElementById("task2").addEventListener("click", showWords);


function showWords() {
    // Limpiamos el array, esto nos asegura que cada vez que pulsemos el botón para iniciar,
    // el array esté vacío y listo para recibir nuevas palabras
    wordsArray = []; 
    
    const wordsBlock = document.getElementById('words-block');
    wordsBlock.innerHTML = '';

    popupWords();

    // Creamos un nuevo Map para almacenar las palabras y sus frecuencias
    const wordsMap = new Map();

    wordsArray.forEach((word) => {
      
      if ( wordsMap.has(word)) {
        // Si la palabra ya existe en el Map, accedemos a su valor y lo incrementamos por 1
        wordsMap.set(word, wordsMap.get(word) + 1);
      } else {
        // Si la palabra no existe, se agrega al Map con un valor inicial de 1
        wordsMap.set(word, 1);
      }
    });

    for (let [clave, valor] of wordsMap)  {
        const li = document.createElement('li');
        li.style.listStyle = 'none';
        li.textContent = `${clave}: ${valor}`; 
        wordsBlock.appendChild(li); 
    };
}