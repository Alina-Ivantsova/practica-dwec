// Inicializamos un array de tamaño 10 con ceros
const frecuencias = Array(10).fill(0);

// Generamos 10000 números aleatorios 
for (let i = 0; i < 10000; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    // Restamos 1 para ajustar al índice del array 0-9
    frecuencias[numeroAleatorio - 1]++; 
}

// Mostramos los resultados
console.log("Frecuencias");
for (let i = 0; i < frecuencias.length; i++) {
  console.log(`Número ${i + 1}: ${frecuencias[i]}`);
}