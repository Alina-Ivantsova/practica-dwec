function multiplyByTwo(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
}

function addTen(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num + 10);
    }, 1000);
  });
}

multiplyByTwo(3)
  .then((resultado) => addTen(resultado))
  .then((resultadoFinal) => console.log('Resultado final:', resultadoFinal))
  .catch((error) => console.error(error));

multiplyByTwo(3).then(addTen).then(console.log).catch(console.error);
