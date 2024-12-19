let wordsArray = [];

function popupWords() {
  
  let word;
  do {
    word = prompt('Introduce una palabra: ');

    //Solo se agriega la palabra si el campo no está vacio o 
    //el usuario no ha pulsado Cancelar
    if (word !== null && word.trim() !== '') {
      //Se añade la palabra al array
      wordsArray.push(word.trim());
    } 
  } while (word !== null && word.trim() !== '');
}
