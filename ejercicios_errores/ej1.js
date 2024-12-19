function divide(a, b) {
  if (b === 0) throw new Error('No se puede dividir por 0');
  return a / b;
}

try {
  console.log(divide(7, 0));
} catch (error) {
  console.log('Error: ', error.message);
}
