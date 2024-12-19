Array.prototype.media = function() {
  
  //Comprobamos si el array está vacio, en este caso devuelve O
  if (this.length === 0) {
    return 0;
  }
  
  //Calculamos la suma usando ruduce
  //Se usa una función reductora que se ejecuta para cada elemento del array, acumulando el resultado
  //empezamos con el acumulador en 0
  const suma = this.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);
  
  //devuelve la media
  return suma/this.length;
}

//Probamos el nuevo método con un array normal y otro vacio
const array = [5, 6, 8, 9, 10, 4 , 2, 5];
const arrayVacio = [];

console.log(array.media());
console.log(arrayVacio.media());