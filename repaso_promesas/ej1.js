function compareNumbers(a, b) {
  return new Promise((resolve, reject) => {
    if (a > b) {
      resolve(`El número ${a} es mayor que ${b}`);
    } else {
      reject(`El número ${a} no es mayor que ${b}`);
    }
  });
}

compareNumbers(7, 6).then(console.log).catch(console.error);
compareNumbers(4, 6)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

  //se puede poner varios rejects en la misma promesa