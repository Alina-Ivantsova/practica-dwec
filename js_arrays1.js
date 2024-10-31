function generarCombinaciones() {
  const combinaciones = [];

  for (let i = 0; i < 50; i++) {
      const numeros = new Set();
      
      // Generamos una combinación de 6 números únicos
      while (numeros.size < 6) {
          const numero = Math.floor(Math.random() * 49) + 1;
          numeros.add(numero);
      }

      // Conviertimos en un array y lo ordenamos
      combinaciones.push([...numeros].sort(function(a, b) {
        return a - b;
      } ));
  }
  return combinaciones;
}


// Mostramos las combinaciones en consola
const combinaciones = generarCombinaciones();
for (let i = 0; i < combinaciones.length; i++) {
  console.log(`Combinación ${i + 1}:`, combinaciones[i]);
}