function taskA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tarea A completada');
    }, 1000);
  });
}

function taskB() {
  return new Promise((_, reject) => {
    // _ - para saber si hay un parametro que no se utiliza
    setTimeout(() => {
      reject('Tarea B falló');
    }, 2000);
  });
}

function taskC() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tarea C completada');
    }, 3000);
  });
}

let allTask = Promise.all([taskA(), taskB(), taskC()]);
allTask
  .then((resultados) => {
    console.log('Resultados: ', resultados);
  })
  .catch(console.error);
