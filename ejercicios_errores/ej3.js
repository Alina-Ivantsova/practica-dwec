function simulaProceso(exito) {
  if (!exito) throw new Error('Hubo un error');
  return 'Proceso exitoso';
}

try {
  let exito = true;
  simulaProceso(exito);
} catch (error) {
  console.log('Error: ', error.message);
}
